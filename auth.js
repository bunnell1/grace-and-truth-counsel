// Shared auth + favorites + last-viewed + weekly suggestion
const SUPABASE_URL = 'https://nvxtvwdvvzhbsvbpnlgz.supabase.co';
const SUPABASE_KEY = 'sb_publishable_U511agudgV1tcFiEIIGbFg_EPDltBn3';
const sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

let currentUser = null;

async function initAuth() {
  const { data: { session } } = await sb.auth.getSession();
  currentUser = session?.user || null;
  updateAuthButton();
  if (currentUser) {
    loadFavorites();
    maybeShowWeekly();
  }
  trackLastViewed();
}

function updateAuthButton() {
  const btn = document.getElementById('auth-btn');
  if (!btn) return;
  if (currentUser) {
    btn.textContent = currentUser.email?.split('@')[0] || 'Account';
    btn.onclick = signOut;
  } else {
    btn.textContent = 'Sign in';
    btn.onclick = openAuthModal;
  }
}

function openAuthModal() {
  document.getElementById('auth-modal').classList.remove('hidden');
  showAuthForm('signin');
}
function closeAuthModal() {
  document.getElementById('auth-modal').classList.add('hidden');
}
function showAuthForm(which) {
  document.getElementById('auth-signin').classList.toggle('hidden', which !== 'signin');
  document.getElementById('auth-signup').classList.toggle('hidden', which !== 'signup');
  document.getElementById('auth-forgot').classList.toggle('hidden', which !== 'forgot');
}

async function signIn() {
  const email = document.getElementById('si-email').value.trim();
  const password = document.getElementById('si-password').value;
  const { error } = await sb.auth.signInWithPassword({ email, password });
  if (error) { alert(error.message); return; }
  closeAuthModal();
  initAuth();
}
async function signUp() {
  const email = document.getElementById('su-email').value.trim();
  const password = document.getElementById('su-password').value;
  const name = document.getElementById('su-name').value.trim();
  const { error } = await sb.auth.signUp({ email, password, options: { data: { name } } });
  if (error) { alert(error.message); return; }
  alert('Check your email to confirm, then sign in.');
  showAuthForm('signin');
}
async function forgotPassword() {
  const email = document.getElementById('fp-email').value.trim();
  const { error } = await sb.auth.resetPasswordForEmail(email, { redirectTo: location.origin });
  if (error) { alert(error.message); return; }
  alert('Password reset email sent.');
  showAuthForm('signin');
}
async function signOut() {
  await sb.auth.signOut();
  currentUser = null;
  updateAuthButton();
  const box = document.getElementById('weekly-suggestion');
  if (box) box.classList.add('hidden');
}

// Favorites
function getLocalFavorites() {
  return JSON.parse(localStorage.getItem('favorites') || '[]');
}
function setLocalFavorites(arr) {
  localStorage.setItem('favorites', JSON.stringify(arr));
}
async function loadFavorites() {
  if (!currentUser) return;
  const { data } = await sb.from('favorites').select('item_id').eq('user_id', currentUser.id);
  if (data) setLocalFavorites(data.map(r => r.item_id));
}
async function toggleFavorite(itemId) {
  const favs = getLocalFavorites();
  const idx = favs.indexOf(itemId);
  if (idx >= 0) favs.splice(idx, 1);
  else favs.push(itemId);
  setLocalFavorites(favs);
  if (currentUser) {
    if (idx >= 0) {
      await sb.from('favorites').delete().eq('user_id', currentUser.id).eq('item_id', itemId);
    } else {
      await sb.from('favorites').insert({ user_id: currentUser.id, item_id: itemId });
    }
  }
  return favs.includes(itemId);
}
function isFavorite(itemId) {
  return getLocalFavorites().includes(itemId);
}

// Last viewed
function trackLastViewed() {
  const page = location.pathname.split('/').pop() || 'index.html';
  const params = location.search;
  localStorage.setItem('lastViewed', page + params);
}
function getLastViewed() {
  return localStorage.getItem('lastViewed');
}

// Weekly suggestion (signed-in only)
const weeklyTopics = [
  'Review one Growth Module you have not opened recently.',
  'Choose one Issue and write a short prayer for the person you might counsel.',
  'Read a recommended book from For Further Reading this week.',
  'Practice listening well: review the Listening module before your next conversation.',
  'Memorize one key verse from an Issue you counsel often.',
  'Set aside 15 minutes to pray through the Armor of God for your counseling.',
  'Reflect on one session: what heart theme did you notice? Write it down.'
];
function maybeShowWeekly() {
  if (!currentUser) return;
  const last = localStorage.getItem('weeklyShown');
  const now = Date.now();
  if (last && now - parseInt(last, 10) < 7 * 24 * 60 * 60 * 1000) return;
  const idx = Math.floor(now / (7 * 24 * 60 * 60 * 1000)) % weeklyTopics.length;
  const box = document.getElementById('weekly-suggestion');
  if (box) {
    box.innerHTML = `<div class="note"><strong>This week:</strong> ${weeklyTopics[idx]} <button class="icon-btn" style="margin-left:0.5rem;" onclick="dismissWeekly()">✕</button></div>`;
    box.classList.remove('hidden');
  }
}
function dismissWeekly() {
  localStorage.setItem('weeklyShown', Date.now().toString());
  const box = document.getElementById('weekly-suggestion');
  if (box) box.classList.add('hidden');
}

document.addEventListener('DOMContentLoaded', initAuth);
