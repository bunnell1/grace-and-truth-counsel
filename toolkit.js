const toolkit = [
  {
    id: "first-meeting",
    title: "First Meeting Notes",
    summary: "A counselor’s page for the first conversation. Covers home, health, church, and the struggles they name.",
    content: `
      <h2>First Meeting Notes</h2>
      <p class="note">For the counselor’s preparation. Do not store a counselee’s name or story on the site. Download the file to your device if you keep it.</p>
      <form class="toolkit-form" id="form-first">
        <label>Church</label><input type="text" id="fm-church" placeholder="Church name">
        <label>Date</label><input type="text" id="fm-date">

        <h3>Why they came</h3>
        <label>What they say is wrong</label><textarea id="fm-problem"></textarea>
        <label>What they have already tried</label><textarea id="fm-tried"></textarea>
        <label>What they hope will be different</label><textarea id="fm-hope"></textarea>

        <h3>Home</h3>
        <label>Marriage, or singleness</label><textarea id="fm-marriage" placeholder="Married, single, divorced, separated. How long. Any earlier marriage."></textarea>
        <label>Children</label><textarea id="fm-children"></textarea>
        <label>Parents and in-laws</label><textarea id="fm-parents" placeholder="The relationship with father, mother, and in-laws."></textarea>

        <h3>Body and habits</h3>
        <label>Health, sleep, appetite</label><textarea id="fm-health"></textarea>
        <label>Medications, or a physician’s care</label><textarea id="fm-meds"></textarea>
        <label>Alcohol, or another substance</label><textarea id="fm-substance"></textarea>

        <h3>Church and walk with God</h3>
        <label>Church, and how often they are there</label><textarea id="fm-churchlife"></textarea>
        <label>Prayer, Scripture, and any recent change</label><textarea id="fm-walk"></textarea>

        <h3>What is present</h3>
        <p class="note">Check what they name. Labels match the Issues list. They do not define the person.</p>
        <div class="check-grid">
        <div class="check-item"><input type="checkbox" id="fm-abuse"><label for="fm-abuse">Abuse</label></div>
        <div class="check-item"><input type="checkbox" id="fm-anger"><label for="fm-anger">Anger</label></div>
        <div class="check-item"><input type="checkbox" id="fm-anxiety"><label for="fm-anxiety">Anxiety</label></div>
        <div class="check-item"><input type="checkbox" id="fm-childanx"><label for="fm-childanx">Anxiety in a child</label></div>
        <div class="check-item"><input type="checkbox" id="fm-addiction"><label for="fm-addiction">Addiction or drunkenness</label></div>
        <div class="check-item"><input type="checkbox" id="fm-bitter"><label for="fm-bitter">Bitterness</label></div>
        <div class="check-item"><input type="checkbox" id="fm-church"><label for="fm-church">Church hurt</label></div>
        <div class="check-item"><input type="checkbox" id="fm-conflict"><label for="fm-conflict">Conflict</label></div>
        <div class="check-item"><input type="checkbox" id="fm-deceive"><label for="fm-deceive">Deception</label></div>
        <div class="check-item"><input type="checkbox" id="fm-decide"><label for="fm-decide">Decisions</label></div>
        <div class="check-item"><input type="checkbox" id="fm-low"><label for="fm-low">Depression or apathy</label></div>
        <div class="check-item"><input type="checkbox" id="fm-divorce"><label for="fm-divorce">Divorce</label></div>
        <div class="check-item"><input type="checkbox" id="fm-doubt"><label for="fm-doubt">Doubt or dryness</label></div>
        <div class="check-item"><input type="checkbox" id="fm-eat"><label for="fm-eat">Feeding and eating</label></div>
        <div class="check-item"><input type="checkbox" id="fm-edu"><label for="fm-edu">Education</label></div>
        <div class="check-item"><input type="checkbox" id="fm-envy"><label for="fm-envy">Envy</label></div>
        <div class="check-item"><input type="checkbox" id="fm-fear"><label for="fm-fear">Fear of man</label></div>
        <div class="check-item"><input type="checkbox" id="fm-grief"><label for="fm-grief">Grief</label></div>
        <div class="check-item"><input type="checkbox" id="fm-identity"><label for="fm-identity">Identity</label></div>
        <div class="check-item"><input type="checkbox" id="fm-illness"><label for="fm-illness">Illness, sleep, or memory</label></div>
        <div class="check-item"><input type="checkbox" id="fm-infert"><label for="fm-infert">Infertility</label></div>
        <div class="check-item"><input type="checkbox" id="fm-inlaw"><label for="fm-inlaw">In-laws</label></div>
        <div class="check-item"><input type="checkbox" id="fm-lonely"><label for="fm-lonely">Loneliness</label></div>
        <div class="check-item"><input type="checkbox" id="fm-marriage"><label for="fm-marriage">Marriage</label></div>
        <div class="check-item"><input type="checkbox" id="fm-money"><label for="fm-money">Money and debt</label></div>
        <div class="check-item"><input type="checkbox" id="fm-ocd"><label for="fm-ocd">Obsessive thoughts</label></div>
        <div class="check-item"><input type="checkbox" id="fm-parent"><label for="fm-parent">Parenting</label></div>
        <div class="check-item"><input type="checkbox" id="fm-alien"><label for="fm-alien">Parental alienation</label></div>
        <div class="check-item"><input type="checkbox" id="fm-rebel"><label for="fm-rebel">Rebellion</label></div>
        <div class="check-item"><input type="checkbox" id="fm-ss"><label for="fm-ss">Same-sex desire</label></div>
        <div class="check-item"><input type="checkbox" id="fm-sex"><label for="fm-sex">Sexual sin or pornography</label></div>
        <div class="check-item"><input type="checkbox" id="fm-shame"><label for="fm-shame">Shame or guilt</label></div>
        <div class="check-item"><input type="checkbox" id="fm-single"><label for="fm-single">Singleness</label></div>
        <div class="check-item"><input type="checkbox" id="fm-start"><label for="fm-start">Starting a family</label></div>
        <div class="check-item"><input type="checkbox" id="fm-tech"><label for="fm-tech">Technology</label></div>
        <div class="check-item"><input type="checkbox" id="fm-trauma"><label for="fm-trauma">Trauma</label></div>
        <div class="check-item"><input type="checkbox" id="fm-work"><label for="fm-work">Work or unemployment</label></div>
        <div class="check-item"><input type="checkbox" id="fm-burnout"><label for="fm-burnout">Work or ministry burnout</label></div>
        <div class="check-item"><input type="checkbox" id="fm-worry"><label for="fm-worry">Worry or perfectionism</label></div>
        <div class="check-item"><input type="checkbox" id="fm-other"><label for="fm-other">Other</label></div>
        </div>
        <label>If other, what</label><textarea id="fm-other-note"></textarea>

        <h3>Anything else</h3>
        <textarea id="fm-else"></textarea>
      </form>
    `
  },
  {
    id: "consent",
    title: "Consent to Counseling",
    summary: "A fillable consent form. Church name is left blank. Adapt it for your church.",
    content: `
      <h2>Consent to Counseling</h2>
      <p class="note">A template for your church. Change any line that does not fit. This is not legal advice.</p>
      <form class="toolkit-form" id="form-consent">
        <label>Church name</label>
        <input type="text" id="cn-church" placeholder="Church name">

        <h3>What this is</h3>
        <p>This is biblical counseling, offered as a ministry of the church. The aim is to help you face what is in front of you by the Word of God and the grace of Christ. There is no fee required.</p>

        <h3>What we use</h3>
        <p>Counsel is given from Scripture, under the care of the local church (2 Timothy 3:16-17). The counselor is not a licensed therapist and does not use the methods of secular psychology. A medical, legal, or financial question should go to a qualified person in that field. Counsel does not replace a physician.</p>



        <h3>Confidentiality</h3>
        <p>Counselors will carefully protect what you share, subject to these limits:</p>
        <ul>
          <li>A counselor may seek advice from church leadership, or from the leaders of another church you attend, when wisdom is needed.</li>
          <li>Information may be shared when a person is in imminent danger of serious harm unless others intervene.</li>
          <li>Information may be shared when a person refuses to repent and church discipline becomes necessary.</li>
          <li>Information may be shared when the law requires a report.</li>
          <li>Observers may sit in on a session to assist or for training.</li>
        </ul>
        <p>The intent is to help, never to harm. A name will be withheld and the matter discussed in general terms unless the specifics are necessary.</p>

        <h3>Counseling Minors</h3>
        <p>The primary responsibility for shepherding children and teenagers rests with their parents. When counseling a minor, the counselor may share information from the sessions with a custodial parent if the counselor believes it is wise.</p>

        <h3>Conflict Resolution</h3>
        <p>First Corinthians 6:1-8 calls Christians not to bring lawsuits against one another in secular courts. Any dispute with a counselor or with this church will be settled by mediation and, if necessary, arbitration under biblical principles. By signing, you agree not to subpoena a counselor, or any notes, in a legal proceeding about matters discussed in counseling.</p>

        <h3>Consent to Record</h3>
        <p>Recordings, if used, are for the counseling process and for counselor training. A full name will not be attached to a recording, and it will not be shared beyond those involved in the case or reviewing it for training. You may request that a recording be destroyed when counseling ends. Refusal to consent to recording does not affect eligibility for counseling.</p>
        <div class="check-item"><input type="checkbox" id="cn-record"><label for="cn-record">I give consent to record sessions</label></div>

        <h3>Signature of Consent</h3>
        <p>Your signature indicates that you have read these guidelines and give informed consent to them.</p>
        <label>Counselee name</label><input type="text" id="cn-name">
        <label>Signature</label><input type="text" id="cn-sign" placeholder="Sign or type name">
        <label>Date</label><input type="text" id="cn-date">

        <h3>Custodial Parent</h3>
        <p class="note">Required when counseling a teenager. Signed by the teen and a custodial parent.</p>
        <div class="check-item"><input type="checkbox" id="cn-parent-needed"><label for="cn-parent-needed">Parental consent needed</label></div>
        <label>Parent name</label><input type="text" id="cn-parent-name">
        <label>Parent signature</label><input type="text" id="cn-parent-sign">
        <label>Date</label><input type="text" id="cn-parent-date">
      </form>
    `
  },
  {
    id: "session-checklist",
    title: "Session Checklist",
    summary: "Fillable pre-, during, and post-session checklist.",
    content: `
      <h2>Session Checklist</h2>
      <form class="toolkit-form" id="form-session">
        <h3>Before the Session</h3>
        <div class="check-item"><input type="checkbox" id="b1"><label for="b1">Prayed for the person and for wisdom</label></div>
        <div class="check-item"><input type="checkbox" id="b2"><label for="b2">Reviewed previous notes and homework</label></div>
        <div class="check-item"><input type="checkbox" id="b3"><label for="b3">Prepared key Scriptures (if appropriate)</label></div>
        <label>Notes</label><textarea id="before-notes"></textarea>

        <h3>During the Session</h3>
        <div class="check-item"><input type="checkbox" id="d1"><label for="d1">Began with prayer and check-in</label></div>
        <div class="check-item"><input type="checkbox" id="d2"><label for="d2">Listened carefully before offering counsel</label></div>
        <div class="check-item"><input type="checkbox" id="d3"><label for="d3">Identified at least one heart theme</label></div>
        <div class="check-item"><input type="checkbox" id="d4"><label for="d4">Brought relevant Scripture</label></div>
        <div class="check-item"><input type="checkbox" id="d5"><label for="d5">Agreed on one clear homework step</label></div>
        <label>Notes</label><textarea id="during-notes"></textarea>

        <h3>After the Session</h3>
        <div class="check-item"><input type="checkbox" id="a1"><label for="a1">Wrote brief notes on heart themes and homework</label></div>
        <div class="check-item"><input type="checkbox" id="a2"><label for="a2">Noted any follow-up or referral needs</label></div>
        <div class="check-item"><input type="checkbox" id="a3"><label for="a3">Prayed again for the person</label></div>
        <label>Notes</label><textarea id="after-notes"></textarea>
      </form>
    `
  },
  {
    id: "homework-template",
    title: "Homework Template",
    summary: "Fillable form for assigning biblical homework.",
    content: `
      <h2>Homework Template</h2>
      <form class="toolkit-form" id="form-homework">
        <label>Counselee name (optional)</label>
        <input type="text" id="hw-name">
        <label>Date</label>
        <input type="text" id="hw-date">
        <label>1. Scripture to read</label>
        <textarea id="hw-scripture" placeholder="Specific passage(s)"></textarea>
        <label>2. Reflection questions</label>
        <textarea id="hw-reflection" placeholder="Heart-focused questions"></textarea>
        <label>3. Action step</label>
        <textarea id="hw-action" placeholder="One small step of obedience or trust"></textarea>
        <label>4. Accountability</label>
        <textarea id="hw-account" placeholder="Who they will share it with (if appropriate)"></textarea>
      </form>
    `
  },
  {
    id: "referral-guide",
    title: "Referral & Limits Notes",
    summary: "Space to record referral and limit considerations.",
    content: `
      <h2>Referral & Limits Notes</h2>
      <form class="toolkit-form" id="form-referral">
        <label>Medical considerations / referrals</label>
        <textarea id="ref-medical" placeholder="Physical symptoms, medication, or evaluation needs"></textarea>
        <label>Safety / legal considerations</label>
        <textarea id="ref-safety" placeholder="Any abuse, harm, or legal issues"></textarea>
        <label>Beyond current experience / supervision needed</label>
        <textarea id="ref-supervision" placeholder="Cases requiring more experienced help"></textarea>
        <label>Other notes</label>
        <textarea id="ref-other"></textarea>
      </form>
    `
  },
  {
    id: "note-template",
    title: "Simple Note Template",
    summary: "Fillable session notes form.",
    content: `
      <h2>Simple Note Template</h2>
      <form class="toolkit-form" id="form-notes">
        <label>Date</label><input type="text" id="note-date">
        <label>Person</label><input type="text" id="note-person">
        <label>Presenting issue</label><textarea id="note-issue"></textarea>
        <label>Heart themes noticed</label><textarea id="note-heart" placeholder="Desires, fears, beliefs"></textarea>
        <label>Scripture used</label><textarea id="note-scripture"></textarea>
        <label>Homework assigned</label><textarea id="note-homework"></textarea>
        <label>Follow-up needed</label><textarea id="note-followup"></textarea>
      </form>
    `
  },
  {
    id: "self-check",
    title: "Counselor Self-Check",
    summary: "Fillable periodic heart check.",
    content: `
      <h2>Counselor Self-Check</h2>
      <form class="toolkit-form" id="form-self">
        <label>Date</label><input type="text" id="self-date">
        <label>Am I pointing people to Christ or trying to be their savior?</label>
        <textarea id="self-1"></textarea>
        <label>Am I resting and protecting needed boundaries?</label>
        <textarea id="self-2"></textarea>
        <label>Do I have someone who counsels me?</label>
        <textarea id="self-3"></textarea>
        <label>Am I growing in humility and dependence on the Lord?</label>
        <textarea id="self-4"></textarea>
        <label>Is there any case that is draining me disproportionately?</label>
        <textarea id="self-5"></textarea>
      </form>
    `
  }
  ,
  {
    id: "what-to-expect",
    title: "What to Expect",
    summary: "A first-meeting form for purpose, confidentiality, and homework.",
    content: `
      <h2>What to Expect</h2>
      <form class="toolkit-form" id="form-expect">
        <label>Date</label><input type="text" id="ex-date">
        <label>Purpose of these meetings</label>
        <textarea id="ex-purpose" placeholder="To listen, apply Scripture, and take one faithful step at a time."></textarea>
        <label>Confidentiality</label>
        <textarea id="ex-confidential" placeholder="What is kept private, and when safety or the church may require otherwise."></textarea>
        <label>Homework</label>
        <textarea id="ex-homework" placeholder="Reading, prayer, and one practical step between meetings."></textarea>
        <label>When I would refer</label>
        <textarea id="ex-refer" placeholder="Medical care, a more experienced counselor, or a safety concern."></textarea>
        <label>Questions they asked</label>
        <textarea id="ex-questions"></textarea>
      </form>
    `
  },
  {
    id: "heart-map",
    title: "Heart Map",
    summary: "One page for the problem, what you observe, and the gospel truth to return to.",
    content: `
      <h2>Heart Map</h2>
      <form class="toolkit-form" id="form-heart">
        <label>Presenting problem</label><textarea id="hm-problem" placeholder="What they say is wrong"></textarea>
        <label>What I observe</label><textarea id="hm-observe" placeholder="Words, tone, patterns, fruit"></textarea>
        <label>What may be underneath</label><textarea id="hm-under" placeholder="Desires, fears, beliefs, worship"></textarea>
        <label>Gospel truth to return to</label><textarea id="hm-gospel" placeholder="One truth about Christ that speaks to this"></textarea>
        <label>One question to ask next</label><textarea id="hm-question"></textarea>
      </form>
    `
  },
  {
    id: "safety-check",
    title: "Safety & Referral Check",
    summary: "A prompt for hopelessness, harm, or a need for a physician or the authorities.",
    content: `
      <h2>Safety & Referral Check</h2>
      <form class="toolkit-form" id="form-safety">
        <div class="check-item"><input type="checkbox" id="sf1"><label for="sf1">Hopelessness or talk of not wanting to live</label></div>
        <div class="check-item"><input type="checkbox" id="sf2"><label for="sf2">Harm to self or others</label></div>
        <div class="check-item"><input type="checkbox" id="sf3"><label for="sf3">Abuse, danger, or a legal duty to report</label></div>
        <div class="check-item"><input type="checkbox" id="sf4"><label for="sf4">Physical symptoms that need a physician</label></div>
        <div class="check-item"><input type="checkbox" id="sf5"><label for="sf5">Beyond my experience — supervision or referral needed</label></div>
        <label>What I will do</label><textarea id="sf-action" placeholder="Who I will contact, and what I will say"></textarea>
        <label>Notes</label><textarea id="sf-notes"></textarea>
      </form>
    `
  },
  {
    id: "closing-well",
    title: "Closing Well",
    summary: "A review for the last session: what changed, what remains, and how they will keep going.",
    content: `
      <h2>Closing Well</h2>
      <form class="toolkit-form" id="form-close">
        <label>What has changed</label><textarea id="cl-changed"></textarea>
        <label>What remains</label><textarea id="cl-remains"></textarea>
        <label>Scripture to keep returning to</label><textarea id="cl-scripture"></textarea>
        <label>How they will keep going</label><textarea id="cl-going" placeholder="Church, prayer, one ongoing practice"></textarea>
        <label>Who else will walk with them</label><textarea id="cl-who"></textarea>
      </form>
    `
  }

];
