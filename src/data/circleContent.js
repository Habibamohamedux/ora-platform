export const circleNavItems = [
  { key: 'overview', label: 'Overview', path: '/circle' },
  { key: 'stories', label: 'Stories', path: '/circle/stories' },
  { key: 'story-details', label: 'Story Details', path: '/circle/story-details' },
  { key: 'share', label: 'Share', path: '/circle/share' },
  { key: 'experiences', label: 'Experiences', path: '/circle/experiences' },
  { key: 'discussions', label: 'Discussions', path: '/circle/discussions' },
  { key: 'thread', label: 'Thread', path: '/circle/thread' },
  { key: 'new-post', label: 'New Post', path: '/circle/new-post' },
  { key: 'anonymous', label: 'Anonymous', path: '/circle/anonymous' },
  { key: 'experts', label: 'Experts', path: '/circle/experts' },
  { key: 'connect', label: 'Connect', path: '/circle/connect' },
  { key: 'groups', label: 'Groups', path: '/circle/groups' },
  { key: 'join', label: 'Join', path: '/circle/join' },
];

export const circlePages = [
  {
    key: 'stories',
    label: 'Stories',
    path: '/circle/stories',
    eyebrow: 'Real Stories',
    title: 'A living archive of pregnancy told by the people living it.',
    description:
      'From quiet milestones to complicated days, Stories gives mothers a place to document the reality of care with empathy, nuance, and community visibility.',
    chips: ['Milestones', 'Challenges', 'Recovery', 'Partner View'],
    stats: [
      { value: '1.4k', label: 'shared stories' },
      { value: '84%', label: 'save for later rate' },
      { value: '11', label: 'story categories' },
    ],
    blocks: [
      {
        type: 'feature',
        label: 'Featured Story',
        title: 'When the bracelet noticed the pattern before I did',
        description:
          'A mother at 32 weeks walks through how a subtle trend in elevated stress and reduced sleep triggered a conversation with her clinician before symptoms escalated.',
        points: [
          'Pulse flagged a three-day stress anomaly',
          'Clinical review happened within eight minutes',
          'Companion reframed the care plan in simple daily actions',
        ],
      },
      {
        type: 'cards',
        title: 'Stories Grid',
        subtitle: 'Browse journeys by stage, mood, and care context.',
        filters: ['Latest', 'Popular', 'Saved'],
        items: [
          {
            eyebrow: 'Milestone',
            title: 'The scan that finally let me breathe',
            description: 'A calm, reflective story about relief after weeks of uncertainty.',
            meta: ['Week 20', 'Relief'],
          },
          {
            eyebrow: 'Challenge',
            title: 'I was tired of pretending I was fine',
            description: 'An honest post about burnout, fear, and asking for support sooner.',
            meta: ['Third trimester', 'Overwhelm'],
          },
          {
            eyebrow: 'Aftercare',
            title: 'What postpartum monitoring changed for me',
            description: 'A story focused on recovery, data visibility, and emotional support.',
            meta: ['Recovery', 'Reassurance'],
          },
        ],
      },
      {
        type: 'cards',
        title: 'Categories',
        subtitle: 'Themed entry points that feel human, not clinical.',
        items: [
          {
            eyebrow: 'Journey',
            title: 'Firsts',
            description: 'First scan, first kick, first good sleep, first calm week.',
          },
          {
            eyebrow: 'Support',
            title: 'Hard Days',
            description: 'Fear, loneliness, uncertainty, and stories about getting through them.',
          },
          {
            eyebrow: 'Growth',
            title: 'Turning Points',
            description: 'The appointments, conversations, and interventions that changed direction.',
          },
        ],
      },
      {
        type: 'carousel',
        title: 'Story Highlights Carousel',
        subtitle: 'Short-form snapshots designed for fast emotional resonance.',
        items: [
          {
            eyebrow: 'Saved 3.1k times',
            title: 'How I explained pregnancy anxiety to my partner',
            description: 'A concise, honest story that helped other families talk more openly.',
          },
          {
            eyebrow: 'Trending',
            title: 'The day I trusted the data',
            description: 'A community favorite about balancing intuition with monitoring insights.',
          },
          {
            eyebrow: 'Editor Pick',
            title: 'What recovery looked like after an emergency change',
            description: 'A powerful reflection on resilience, systems, and support.',
          },
        ],
      },
      {
        type: 'list',
        title: 'Community Reactions',
        subtitle: 'A quick read on the emotional pulse around each story.',
        items: [
          {
            title: '1,284 people found reassurance in the featured story',
            description: 'Most reactions clustered around feeling seen, calm, and more prepared.',
            meta: 'Likes · Saves · Comments',
          },
          {
            title: 'Stories tagged “first scan” outperform generic milestone posts',
            description: 'More contextual framing leads to better discovery and deeper discussion.',
            meta: 'Signal insight',
          },
        ],
      },
    ],
    related: ['share', 'story-details', 'discussions'],
  },
  {
    key: 'story-details',
    label: 'Story Details',
    path: '/circle/story-details',
    eyebrow: 'Story Details',
    title: 'Long-form reading designed to feel intimate, clear, and worth staying in.',
    description:
      'This page turns a story into a guided experience with emotional context, reactions, comments, and clear pathways into related support.',
    chips: ['Reading Mode', 'Emotional Tags', 'Comments', 'Related Stories'],
    stats: [
      { value: '9 min', label: 'average read time' },
      { value: '72%', label: 'comment completion rate' },
      { value: '18', label: 'context tags available' },
    ],
    blocks: [
      {
        type: 'feature',
        label: 'Story Header',
        title: 'I did not know stress could feel so physical until week twenty-eight',
        description:
          'By Lina A. · Shared from Companion after a high-stress period and follow-up care review with her doctor.',
        points: ['Title + author', 'Reading meta', 'Save / share actions'],
      },
      {
        type: 'article',
        title: 'Story Content',
        paragraphs: [
          'The story layout should feel editorial, not like a social feed. Wide margins, gentle pacing, and strong typography help the reader slow down and stay present.',
          'Emotional tags are surfaced beside the content so the system can connect the story to similar journeys, related threads, and relevant expert guidance.',
          'At the end of the article, Circle transitions naturally into reactions, comments, and supportive next steps instead of leaving the user at a dead end.',
        ],
        tags: ['Anxiety', 'Third Trimester', 'Clinical Follow-Up', 'Hopeful Ending'],
      },
      {
        type: 'cards',
        title: 'Reactions',
        subtitle: 'Actions that feel caring rather than gamified.',
        items: [
          {
            eyebrow: 'Primary',
            title: 'Like, save, and share',
            description: 'Soft actions with strong feedback and zero visual clutter.',
          },
          {
            eyebrow: 'Secondary',
            title: 'Emotional resonance',
            description: 'Seen, hopeful, calmer, informed, and not alone.',
          },
        ],
      },
      {
        type: 'list',
        title: 'Comments Section',
        subtitle: 'Supportive replies are surfaced with clarity and warmth.',
        items: [
          {
            title: '“This helped me explain my own symptoms better.”',
            description: 'Comments prioritize usefulness, reassurance, and shared understanding.',
            meta: 'Most helpful',
          },
          {
            title: '“I had the same pattern and my doctor adjusted my plan.”',
            description: 'Peer validation builds confidence and creates a bridge into discussion.',
            meta: 'Clinically relevant',
          },
        ],
      },
      {
        type: 'profiles',
        title: 'Author Profile Preview',
        subtitle: 'A light-touch identity layer that supports trust without overexposing people.',
        items: [
          {
            name: 'Lina A.',
            role: 'Mother · 32 weeks',
            focus: 'Tracking sleep, stress, and reassurance-building habits',
            note: 'Prefers guided resources and small discussion groups.',
          },
        ],
      },
    ],
    related: ['stories', 'discussions', 'share'],
  },
  {
    key: 'share',
    label: 'Share',
    path: '/circle/share',
    eyebrow: 'Share Your Story',
    title: 'A storytelling flow that feels safe, guided, and beautifully intentional.',
    description:
      'The Share page helps mothers publish experiences with context, privacy controls, media, and a polished preview before anything goes live.',
    chips: ['Compose', 'Tags', 'Upload', 'Privacy'],
    stats: [
      { value: '3', label: 'privacy modes' },
      { value: '5', label: 'story framing prompts' },
      { value: '94%', label: 'draft completion rate target' },
    ],
    blocks: [
      {
        type: 'form',
        id: 'share-story',
        title: 'Story Form',
        subtitle: 'Prompted inputs make it easier to start when the topic is emotional.',
        fields: [
          { name: 'title', label: 'Story title', type: 'input', placeholder: 'Name the moment you want to share' },
          { name: 'content', label: 'Story content', type: 'textarea', placeholder: 'Describe what happened, how it felt, and what changed' },
        ],
        options: ['Milestone', 'Challenge', 'Recovery', 'Advice'],
        toggles: [
          { name: 'anonymous', label: 'Post anonymously', defaultValue: false },
          { name: 'media', label: 'Attach media', defaultValue: true },
        ],
      },
      {
        type: 'cards',
        title: 'Add Tags / Experience Type',
        subtitle: 'Tags make stories more discoverable and more useful.',
        items: [
          {
            eyebrow: 'Stage',
            title: 'Pregnancy week or trimester',
            description: 'Anchor the story in time so other users can relate instantly.',
          },
          {
            eyebrow: 'Emotion',
            title: 'How it felt',
            description: 'Hopeful, afraid, relieved, exhausted, calm, empowered.',
          },
          {
            eyebrow: 'Context',
            title: 'Clinical or daily-life context',
            description: 'Monitoring alert, appointment, sleep issue, family support, nutrition.',
          },
        ],
      },
      {
        type: 'cards',
        title: 'Preview Mode',
        subtitle: 'A live mockup shows how the story will read inside the community.',
        items: [
          {
            eyebrow: 'Design cue',
            title: 'Editorial reading preview',
            description: 'The story transforms into the final card and article style before publishing.',
          },
          {
            eyebrow: 'Confidence cue',
            title: 'Submission confirmation',
            description: 'Users get a calm success state with next-step prompts into Stories and Discussions.',
          },
        ],
      },
    ],
    related: ['stories', 'story-details', 'join'],
  },
  {
    key: 'experiences',
    label: 'Experiences',
    path: '/circle/experiences',
    eyebrow: 'Moments That Connect Us',
    title: 'Pregnancy moments organized by stage, feeling, and meaning.',
    description:
      'Experiences turns life moments into a browseable emotional timeline so users can explore how others felt at similar points in their journey.',
    chips: ['Timeline', 'Emotion Map', 'Trending', 'Inputs'],
    stats: [
      { value: '9', label: 'journey stages' },
      { value: '24', label: 'experience types' },
      { value: '4x', label: 'faster discovery via emotion mapping' },
    ],
    blocks: [
      {
        type: 'timeline',
        title: 'Pregnancy Journey Timeline',
        items: [
          { label: 'Stage 01', title: 'The first positive test', description: 'Shock, excitement, questions, and the first need for guidance.' },
          { label: 'Stage 02', title: 'The first scan', description: 'A foundational moment of reassurance and visibility.' },
          { label: 'Stage 03', title: 'The first kick', description: 'A deeply emotional milestone that users love to revisit.' },
          { label: 'Stage 04', title: 'The final stretch', description: 'Monitoring becomes more active and community support intensifies.' },
        ],
      },
      {
        type: 'cards',
        title: 'Highlight Cards',
        subtitle: 'Capture the shared language of pregnancy moments.',
        items: [
          {
            eyebrow: 'Milestone',
            title: 'First kick',
            description: 'Joyful, surreal, and often one of the most saved experience moments.',
          },
          {
            eyebrow: 'Milestone',
            title: 'First scan',
            description: 'A visual turning point that often changes the emotional tone of the journey.',
          },
          {
            eyebrow: 'Transition',
            title: 'Care plan update',
            description: 'Where clinical context meets emotional processing.',
          },
        ],
      },
      {
        type: 'cards',
        title: 'Emotional Mapping',
        subtitle: 'Feelings become a navigation layer instead of hidden metadata.',
        items: [
          { eyebrow: 'Calm', title: 'Grounded moments', description: 'Experiences tagged with clarity, reassurance, and stability.' },
          { eyebrow: 'Fear', title: 'Hard conversations', description: 'Moments when support, explanation, and fast access matter most.' },
          { eyebrow: 'Joy', title: 'Breakthroughs', description: 'Celebrations that help the community feel momentum and hope.' },
        ],
      },
      {
        type: 'list',
        title: 'Trending Experiences',
        subtitle: 'Real-time visibility into what the community is connecting around.',
        items: [
          {
            title: 'First scan stories are rising this week',
            description: 'A strong entry point to connect Stories and Discussions around reassurance.',
            meta: 'Trending',
          },
          {
            title: 'Recovery reflections are driving deeper comments',
            description: 'Longer-form content is generating more thoughtful exchanges.',
            meta: 'High engagement',
          },
        ],
      },
    ],
    related: ['stories', 'discussions', 'connect'],
  },
  {
    key: 'discussions',
    label: 'Discussions',
    path: '/circle/discussions',
    eyebrow: 'Open Conversations',
    title: 'Discussion spaces built for thoughtful support instead of noise.',
    description:
      'Circle Discussions brings questions, lived experience, and clinician-informed community context into one calm conversation layer.',
    chips: ['Categories', 'Trending', 'Quick Post', 'Highlights'],
    stats: [
      { value: '62', label: 'active topic spaces' },
      { value: '7 min', label: 'median first reply' },
      { value: '89%', label: 'questions receiving at least one answer' },
    ],
    blocks: [
      {
        type: 'cards',
        title: 'Categories Grid',
        subtitle: 'Organize conversations by real needs, not vague forum buckets.',
        filters: ['Recent', 'Most Active'],
        items: [
          { eyebrow: 'Care', title: 'Appointments & tests', description: 'Questions before, during, and after checkups.' },
          { eyebrow: 'Health', title: 'Sleep, stress, and symptoms', description: 'Daily support anchored in patterns and reassurance.' },
          { eyebrow: 'Life', title: 'Work, family, and planning', description: 'Balancing pregnancy with everything else still happening.' },
        ],
      },
      {
        type: 'list',
        title: 'Active Discussions List',
        subtitle: 'Readable conversation rows with clear signals of value and urgency.',
        items: [
          {
            title: 'Has anyone had a stress alert without obvious symptoms?',
            description: 'Peer answers and one clinician response are already helping frame next steps.',
            meta: '18 replies · 4 experts following',
          },
          {
            title: 'How do you handle restless nights in the third trimester?',
            description: 'A warm thread mixing routines, monitoring insights, and reassurance.',
            meta: '32 replies · trending',
          },
        ],
      },
      {
        type: 'form',
        id: 'quick-discussion',
        title: 'Quick Post Input',
        subtitle: 'Low-friction posting keeps the page feeling alive.',
        fields: [
          { name: 'question', label: 'Start a discussion', type: 'textarea', placeholder: 'Ask a question or open a conversation for the community' },
        ],
        options: ['General', 'Symptoms', 'Appointments', 'Emotional Support'],
      },
      {
        type: 'cards',
        title: 'Community Highlights',
        subtitle: 'Editorially surfaced moments of helpful, generous conversation.',
        items: [
          { eyebrow: 'Helpful', title: 'A thread that turned confusion into clarity', description: 'Strong peer explanation plus a simple expert note.' },
          { eyebrow: 'Warm', title: 'A late-night discussion full of support', description: 'An example of Circle working as an emotional safety net.' },
        ],
      },
    ],
    related: ['thread', 'stories', 'anonymous'],
  },
  {
    key: 'thread',
    label: 'Thread',
    path: '/circle/thread',
    eyebrow: 'Thread View',
    title: 'Thread design that makes the best answer easy to find without flattening the conversation.',
    description:
      'The Thread page gives structure to complex questions with clear replies, reactions, highlighted answers, and intelligent paths to related expert content.',
    chips: ['Question', 'Replies', 'Expert Answer', 'Related'],
    stats: [
      { value: '43', label: 'reply threads supported' },
      { value: '1', label: 'highlighted expert answer slot' },
      { value: '5', label: 'reaction types' },
    ],
    blocks: [
      {
        type: 'feature',
        label: 'Main Question',
        title: 'Is it normal for stress alerts to spike before a major appointment?',
        description:
          'Posted by Sara M. · The thread opens with enough context for meaningful answers without overwhelming the reader.',
        points: ['Clear author context', 'Pinned key question', 'Fast jump to replies'],
      },
      {
        type: 'thread',
        title: 'Replies List',
        replies: [
          {
            author: 'Noura',
            role: 'Community member',
            content: 'I had a similar pattern before every scan. Seeing it documented helped me explain it better to my doctor.',
            meta: '27 upvotes',
          },
          {
            author: 'Dr. Hadeer',
            role: 'Verified obstetrician',
            content: 'Patterns around anticipation can be normal, but it matters whether the baseline returns and whether other signs changed too.',
            meta: 'Expert reply',
          },
        ],
      },
      {
        type: 'cards',
        title: 'Upvotes / Reactions',
        subtitle: 'Useful signal without turning the thread into a popularity contest.',
        items: [
          { eyebrow: 'Seen', title: 'Helpful', description: 'Marks practical answers that make next steps clearer.' },
          { eyebrow: 'Support', title: 'Reassuring', description: 'Surfaces responses that emotionally grounded the reader.' },
        ],
      },
      {
        type: 'cards',
        title: 'Related Threads',
        subtitle: 'Connected conversations keep momentum inside the ecosystem.',
        items: [
          { eyebrow: 'Linked', title: 'Stress trends before scans', description: 'A similar discussion with more clinician commentary.' },
          { eyebrow: 'Linked', title: 'How I prepare for appointment week', description: 'Practical routines from community members.' },
        ],
      },
    ],
    related: ['experts', 'discussions', 'stories'],
  },
  {
    key: 'new-post',
    label: 'New Post',
    path: '/circle/new-post',
    eyebrow: 'Create Post',
    title: 'A polished posting flow for questions, reflections, and community check-ins.',
    description:
      'New Post is a flexible composer that supports discussion prompts, category tagging, anonymity, previewing, and publication controls.',
    chips: ['Composer', 'Category', 'Tags', 'Preview'],
    stats: [
      { value: '4', label: 'post modes' },
      { value: '12', label: 'smart tags' },
      { value: '1 tap', label: 'anonymous posting toggle' },
    ],
    blocks: [
      {
        type: 'form',
        id: 'new-post-form',
        title: 'Input Field',
        subtitle: 'The composer adapts to quick questions and long-form prompts.',
        fields: [
          { name: 'headline', label: 'Headline', type: 'input', placeholder: 'What do you want to ask or share?' },
          { name: 'body', label: 'Post content', type: 'textarea', placeholder: 'Add more detail for the community' },
        ],
        options: ['Question', 'Reflection', 'Advice Needed', 'Check-In'],
        toggles: [
          { name: 'anonymous', label: 'Post anonymously', defaultValue: false },
          { name: 'preview', label: 'Open preview mode', defaultValue: true },
        ],
      },
      {
        type: 'cards',
        title: 'Post Settings',
        subtitle: 'Controls that support clarity, relevance, and safety.',
        items: [
          { eyebrow: 'Visibility', title: 'Audience selection', description: 'Public feed, stage-matched users, or private group only.' },
          { eyebrow: 'Discovery', title: 'Tags and category', description: 'Improves relevance in Discussions, Anonymous, and Groups.' },
          { eyebrow: 'Intent', title: 'Request type', description: 'Support, experiences, advice, or clinical context.' },
        ],
      },
    ],
    related: ['discussions', 'anonymous', 'join'],
  },
  {
    key: 'anonymous',
    label: 'Anonymous',
    path: '/circle/anonymous',
    eyebrow: 'Speak Freely',
    title: 'A protected layer for questions people are not ready to ask in public.',
    description:
      'Anonymous support gives users privacy by default while preserving warmth, moderation, and clear pathways into safer community help.',
    chips: ['Private Feed', 'Ask Quietly', 'Safety', 'Moderation'],
    stats: [
      { value: '100%', label: 'identity-hidden mode' },
      { value: '24/7', label: 'moderation coverage target' },
      { value: '3', label: 'safety escalation tiers' },
    ],
    blocks: [
      {
        type: 'list',
        title: 'Anonymous Feed',
        subtitle: 'Questions feel visible without exposing identity.',
        items: [
          {
            title: 'I feel guilty that I am not enjoying this stage',
            description: 'A vulnerable post answered with empathy, normalization, and resources.',
            meta: 'Anonymous · 41 replies',
          },
          {
            title: 'Can stress alerts mean something is wrong if I feel okay?',
            description: 'A common but hard-to-ask question that benefits from calm community framing.',
            meta: 'Anonymous · Expert watching',
          },
        ],
      },
      {
        type: 'form',
        id: 'anonymous-question',
        title: 'Ask Question Box',
        subtitle: 'The posting flow prioritizes psychological safety from the first click.',
        fields: [
          { name: 'anonymousQuestion', label: 'Your question', type: 'textarea', placeholder: 'Ask anything without sharing your identity' },
        ],
        options: ['Emotional support', 'Symptoms', 'Relationship', 'Fear / uncertainty'],
      },
      {
        type: 'cards',
        title: 'Safety and Moderation',
        subtitle: 'Clear boundaries keep Anonymous caring and trustworthy.',
        items: [
          { eyebrow: 'Safety Notice', title: 'Sensitive topic protection', description: 'Crisis-sensitive copy and escalation pathways are always visible.' },
          { eyebrow: 'Guidelines', title: 'Kindness-first rules', description: 'Plain-language expectations that keep the space humane.' },
          { eyebrow: 'Moderation', title: 'Visible review status', description: 'Users understand when content is queued, reviewed, or guided elsewhere.' },
        ],
      },
    ],
    related: ['discussions', 'new-post', 'experts'],
  },
  {
    key: 'experts',
    label: 'Experts',
    path: '/circle/experts',
    eyebrow: 'Guided by Experts',
    title: 'Clinical credibility woven into community support, not separated from it.',
    description:
      'Experts introduces verified doctors into Circle through approachable profiles, featured answers, topic categories, and a calm ask-an-expert workflow.',
    chips: ['Profiles', 'Ask', 'Featured Answers', 'FAQ'],
    stats: [
      { value: '26', label: 'verified experts' },
      { value: '<12h', label: 'target response window' },
      { value: '8', label: 'topic clusters' },
    ],
    blocks: [
      {
        type: 'profiles',
        title: 'Expert Profiles',
        subtitle: 'Professional, warm, and easy to trust at a glance.',
        items: [
          {
            name: 'Dr. Hadeer Samy',
            role: 'Obstetrician',
            focus: 'High-risk pregnancy, real-time monitoring interpretation',
            note: 'Responds in threads and contributes featured guidance.',
          },
          {
            name: 'Dr. Mariam Adel',
            role: 'Maternal wellness specialist',
            focus: 'Stress, sleep, and sustainable routines',
            note: 'Known for gentle, highly readable answers.',
          },
        ],
      },
      {
        type: 'form',
        id: 'ask-expert',
        title: 'Ask Question Module',
        subtitle: 'Questions can route into featured answers or linked threads.',
        fields: [
          { name: 'expertQuestion', label: 'Ask an expert', type: 'textarea', placeholder: 'Describe your concern and the context around it' },
        ],
        options: ['Monitoring', 'Symptoms', 'Appointments', 'Mental wellbeing'],
      },
      {
        type: 'cards',
        title: 'Featured Answers',
        subtitle: 'Editorially highlighted responses that blend clarity and compassion.',
        items: [
          { eyebrow: 'Popular', title: 'What a stress alert actually means', description: 'A plain-language answer that translates system signals into next steps.' },
          { eyebrow: 'Useful', title: 'When to call your doctor after new symptoms', description: 'Specific guidance framed with calm urgency.' },
        ],
      },
      {
        type: 'faq',
        title: 'FAQ Section',
        items: [
          {
            question: 'How are experts verified?',
            answer: 'Profiles carry verification badges, specialty tags, and structured response history to make credibility immediately visible.',
          },
          {
            question: 'Do expert answers replace medical appointments?',
            answer: 'No. Circle frames experts as guidance and interpretation support, not a replacement for urgent or in-person care.',
          },
        ],
      },
    ],
    related: ['thread', 'discussions', 'join'],
  },
  {
    key: 'connect',
    label: 'Connect',
    path: '/circle/connect',
    eyebrow: 'Find Your Circle',
    title: 'Connection designed around similarity, timing, and emotional fit.',
    description:
      'Connect helps users discover people at similar stages, with similar concerns, or with complementary support styles while keeping the experience safe and intentional.',
    chips: ['Suggested', 'Matching', 'Network', 'Activity'],
    stats: [
      { value: '7', label: 'matching dimensions' },
      { value: '3', label: 'connection modes' },
      { value: '91%', label: 'relevance target for suggestions' },
    ],
    blocks: [
      {
        type: 'profiles',
        title: 'Suggested Connections',
        subtitle: 'Users are surfaced through relevance, not randomness.',
        items: [
          {
            name: 'Aya',
            role: '28 weeks',
            focus: 'Sleep tracking, scans, balancing work stress',
            note: 'Open to one-to-one supportive connections.',
          },
          {
            name: 'Mona',
            role: 'First trimester',
            focus: 'Anxiety management and learning clinical terms',
            note: 'Most active in discussion-based support.',
          },
        ],
      },
      {
        type: 'cards',
        title: 'Matching System',
        subtitle: 'Connection logic can be explained visually and transparently.',
        items: [
          { eyebrow: 'Stage', title: 'Same pregnancy phase', description: 'Shared timing creates immediate relevance.' },
          { eyebrow: 'Needs', title: 'Similar concerns', description: 'Stress, sleep, symptoms, first-time questions, postpartum recovery.' },
          { eyebrow: 'Style', title: 'Support preference', description: 'Quiet reader, active sharer, group-oriented, expert-focused.' },
        ],
      },
      {
        type: 'network',
        title: 'Network Visualization',
        subtitle: 'A soft node map makes the community feel alive and connected.',
        center: 'You',
        items: [
          { title: 'Stories', description: 'People who share openly' },
          { title: 'Discussion Circle', description: 'People who answer often' },
          { title: 'Expert Links', description: 'Users following clinical guidance' },
          { title: 'Recovery Group', description: 'Stage-based support' },
        ],
      },
      {
        type: 'list',
        title: 'Activity Feed',
        subtitle: 'Connection-worthy moments from across Circle.',
        items: [
          { title: 'Aya replied to your saved discussion', description: 'A relevant person can move from content discovery to connection.', meta: '2 min ago' },
          { title: 'A recovery group matched your current interests', description: 'Cross-linking with Groups keeps the ecosystem cohesive.', meta: 'Suggested' },
        ],
      },
    ],
    related: ['groups', 'stories', 'join'],
  },
  {
    key: 'groups',
    label: 'Groups',
    path: '/circle/groups',
    eyebrow: 'Join Groups',
    title: 'Smaller circles for deeper trust, shared identity, and recurring support.',
    description:
      'Groups gives the community structure through stage-based, topic-based, and goal-based spaces with their own activity, onboarding, and creation tools.',
    chips: ['Categories', 'Featured', 'Create', 'Activity'],
    stats: [
      { value: '18', label: 'group types' },
      { value: '240', label: 'average members in featured groups' },
      { value: '6', label: 'guided onboarding prompts' },
    ],
    blocks: [
      {
        type: 'cards',
        title: 'Featured Groups',
        subtitle: 'Groups feel curated and purposeful from the first glance.',
        items: [
          { eyebrow: 'Stage-Based', title: 'Third Trimester Circle', description: 'A focused group for monitoring, preparation, and reassurance.' },
          { eyebrow: 'Topic-Based', title: 'Calm Sleep Club', description: 'Practical, gentle routines for better nights and lower stress.' },
          { eyebrow: 'Recovery', title: 'Postpartum Reset', description: 'Support for healing, care plans, and emotional adjustment.' },
        ],
      },
      {
        type: 'form',
        id: 'create-group',
        title: 'Create Group Form',
        subtitle: 'Users can spin up purposeful micro-communities without complexity.',
        fields: [
          { name: 'groupName', label: 'Group name', type: 'input', placeholder: 'Name your group' },
          { name: 'groupPurpose', label: 'Purpose', type: 'textarea', placeholder: 'Describe who this group is for and what support it offers' },
        ],
        options: ['Stage-based', 'Topic-based', 'Recovery', 'Private support'],
      },
      {
        type: 'list',
        title: 'Group Activity Preview',
        subtitle: 'Show momentum, not just membership counts.',
        items: [
          { title: 'Third Trimester Circle hosted a live Q&A recap', description: 'Members can quickly see the quality of recent activity.', meta: '142 active this week' },
          { title: 'Calm Sleep Club added a new nightly ritual guide', description: 'Useful artifacts make groups feel valuable over time.', meta: 'New resource' },
        ],
      },
      {
        type: 'cards',
        title: 'Join Requests',
        subtitle: 'Membership and privacy controls stay visible and friendly.',
        items: [
          { eyebrow: 'Open', title: 'Instant join groups', description: 'Fast access for broad support communities.' },
          { eyebrow: 'Private', title: 'Request-based groups', description: 'Higher trust spaces for sensitive topics and identity-based support.' },
        ],
      },
    ],
    related: ['connect', 'join', 'discussions'],
  },
  {
    key: 'join',
    label: 'Join',
    path: '/circle/join',
    eyebrow: 'Join the Circle',
    title: 'A warm onboarding flow that turns new visitors into confident participants.',
    description:
      'Join introduces the value of Circle, collects the right information, and personalizes the community experience from the very first interaction.',
    chips: ['Benefits', 'Sign Up', 'Interests', 'Welcome'],
    stats: [
      { value: '2 min', label: 'target onboarding time' },
      { value: 'EN / AR', label: 'bilingual ready' },
      { value: '1', label: 'personalized first feed generated instantly' },
    ],
    blocks: [
      {
        type: 'cards',
        title: 'Benefits of Joining',
        subtitle: 'The value proposition is immediate and specific.',
        items: [
          { eyebrow: 'Support', title: 'Find people who get it', description: 'Stage-aware community, not generic social noise.' },
          { eyebrow: 'Clarity', title: 'See patterns earlier', description: 'Stories, discussions, and experts all connect to insight.' },
          { eyebrow: 'Care', title: 'Build your support network', description: 'From private reflection to groups and direct connections.' },
        ],
      },
      {
        type: 'form',
        id: 'join-circle',
        title: 'Sign Up Form',
        subtitle: 'The setup flow is minimal, clear, and immediately rewarding.',
        fields: [
          { name: 'name', label: 'Name', type: 'input', placeholder: 'Your first name' },
          { name: 'email', label: 'Email', type: 'input', placeholder: 'you@example.com' },
          { name: 'stage', label: 'Current stage', type: 'input', placeholder: 'Week, trimester, or postpartum' },
        ],
        options: ['Continue with email', 'Apple', 'Google', 'Clinic invitation'],
      },
      {
        type: 'cards',
        title: 'Interests Selection',
        subtitle: 'The first feed should feel instantly relevant.',
        items: [
          { eyebrow: 'Topics', title: 'Monitoring, symptoms, calm routines', description: 'Users declare what they care about right away.' },
          { eyebrow: 'Community', title: 'Stories, groups, experts', description: 'Personalization adapts to support style, not just topic.' },
          { eyebrow: 'Language', title: 'English / Arabic', description: 'Bilingual readiness is baked into the system story.' },
        ],
      },
      {
        type: 'feature',
        label: 'Welcome Message',
        title: 'You are in a circle built to support you, not overwhelm you',
        description:
          'After sign-up, the user lands in a personalized welcome state with suggested stories, groups, experts, and active conversations matched to her journey.',
        points: ['Personalized first feed', 'Suggested people and groups', 'Soft prompt to share or ask'],
      },
    ],
    related: ['connect', 'groups', 'stories'],
  },
];

export const circlePageMap = circlePages.reduce((accumulator, page) => {
  accumulator[page.key] = page;
  return accumulator;
}, {});

export const circleEcosystemLinks = [
  {
    title: 'Stories ↔ Discussions',
    description: 'Stories naturally spark conversations, reflections, and follow-up questions.',
  },
  {
    title: 'Experts ↔ Threads',
    description: 'High-quality clinician answers can surface inside active conversation threads.',
  },
  {
    title: 'Anonymous ↔ Discussions',
    description: 'Sensitive questions can begin privately and move into community dialogue when users are ready.',
  },
  {
    title: 'Connect ↔ Groups',
    description: 'People discovery and group belonging reinforce each other instead of competing.',
  },
];
