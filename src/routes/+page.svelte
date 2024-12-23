<!-- vim:set ft=html sw=2 sts=2 ts=2: -->

<script>
  import ResumeContainer from '$lib/ResumeContainer.svelte';
  import ResumeBioCard from '$lib/ResumeBioCard.svelte';
  import ResumeExperiencesCard from '$lib/ResumeExperiencesCard.svelte';
  import ResumeCertificationsCard from '$lib/ResumeCertificationsCard.svelte';
  import ResumeSkillsCard from '$lib/ResumeSkillsCard.svelte';

  const authorities = [
    {
      by: 'Mulesoft',
      border: 'border-sky-500',
      header: 'text-sky-500',
      certs: [
        { title: 'Mulesoft Developer I', startDate: 'Jan 2023' },
      ]
    },
    {
      by: 'Salesforce',
      border: 'border-indigo-500',
      header: 'text-indigo-500',
      certs: [
        { title: 'AI Specialist', startDate: '2024' },
        { title: 'Financial Services Cloud Accredited', startDate: '2024' },
        { title: 'AI Associate', startDate: '2024' },
        { title: 'Contact Center Accredited', startDate: '2024' },
        { title: 'Data Cloud Consultant', startDate: '2023' },
        { title: 'B2C Solution Architect', startDate: '2023' },
        { title: 'Marketing Cloud Email Specialist', startDate: '2022' },
        { title: 'B2B Solution Architect', startDate: '2021' },
        { title: 'Javascript Developer I', startDate: '2021' },
        { title: 'Integration Architecture', startDate: '2021' },
        { title: 'System Architect', startDate: '2021' },
        { title: 'Development Lifecycle & Deployment', startDate: '2021' },
        { title: 'Identity & Access Management', startDate: '2021' },
        { title: 'Field Service Lightning Consultant', startDate: '2019' },
        { title: 'Service Cloud Consultant', startDate: '2019' },
        { title: 'Application Architect', startDate: '2019' },
        { title: 'Data Architecture & Management', startDate: '2019' },
        { title: 'Heroku Architecture', startDate: '2019' },
        { title: 'Sharing & Visibility', startDate: '2019' },
        { title: 'Advanced Administrator', startDate: '2019' },
        { title: 'Community Cloud Consultant', startDate: '2019' },
        { title: 'Platform Developer II', startDate: '2018' },
        { title: 'Sales Cloud Consultant', startDate: '2017' },
        { title: 'Platform Developer I', startDate: '2017' },
        { title: 'Platform App Builder', startDate: '2017' },
        { title: 'Administrator', startDate: '2015' },
        { title: 'Force.com Developer ', startDate: '2014', endDate: '2018', subtitle: 'Retired' },
      ]
    },
    {
      by: 'Oracle',
      border: 'border-rose-800',
      header: 'text-rose-800',
      certs: [
        { title: 'Java SE 6 Certified Programmer', startDate: 'Sep 2012' }
      ]
    }
  ];

  const skills = [
    'Salesforce',
    'Object Oriented Programming',
    'Jira & Confluence',
    'Databases & SQL',
    'Java',
    'JavaScript & node.js',
    'Agile/Scrum',
    'Sales Engineering',
    'REST & SOAP',
    'Mulesoft',
    'AWS & Azure',
    'Git',
    'CI/CD',
    'HTML & CSS',
    'Linux & shell script',
  ];

  const work = [
    {
      name: 'Fortimize',
      location: 'Remote',
      border: 'border-green-600',
      header: 'text-green-600',
      positions: [
        { name: 'Sr Manager & TA', startDate: '2021', endDate: 'Present' },
        { name: 'Manager & TA', startDate: '2020' },
        { name: 'Technical Architect', startDate: '2019' },
      ],
      summary: [
        `I joined Fortimize as a technical architect and stepped into leading
        our developer & TA team. I ensure our team is align with best practices
        to deliver scalable solutions on the Salesforce platform for our
        clients in the banking and real estate industries. I also design
        integrations between Salesforce and industry-specific platforms across
        a wide range of platforms, including Mulesoft, Azure, and custom Apex.`,
      ],
      achievements: [
        'Technical architect for projects in the real estate space',
        'Design and build custom integrations on Mulesoft & Azure',
        'Integration experience with industry-specific platforms such as Yardi & MRI',
        'Manage the developer & TA team',
        'Assist with sales engineering for real estate & banking deal cycles'
      ]
    },

    {
      name: 'Trifecta Technologies',
      location: 'Allentown PA',
      border: 'border-amber-600',
      header: 'text-amber-600',
      positions: [
        { name: 'Practice Lead', startDate: '2017', endDate: '2019' },
        { name: 'Sr Dev & Tech Lead', startDate: '2014' },
        { name: 'Web Dev', startDate: '2013' },
        { name: 'Associate Web Dev', startDate: '2012' }
      ],
      summary: [
        `Starting as an Associate Developer, I grew to the position of
        Senior Developer by demonstrating strong problem solving for
        Trifecta's largest clients. In 2017, I took on the role of
        Practice Lead for Trifecta’s Salesforce dev team, serving as a
        technical lead and architect for my team across all Salesforce
        projects.`
      ],
      achievements: [
        'Designed & delivered solutions for Walt Disney World, Varsity Spirit and more',
        'Managed a team of 8 developers and acted as a technical lead on projects',
        'Assisted in technical discovery and sales engineering for sales team',
        'Full stack development in Java, HTML, CSS, and Javascript',
        'Salesforce development using Apex, Lightning, and Visualforce',
        'Leveraged Heroku, AWS, and other cloud-based hosting providers',
        'Designed and reviewed Sketch mockups with clients for custom UI/UX'
      ]
    }
  ];

  const education = [
    {
      name: 'Radford University',
      location: 'Radford VA',
      border: 'border-rose-800',
      header: 'text-rose-800',
      positions: [
        {
          name: 'BS, CS & Physics',
          detail: 'Magna Cum Laude',
          startDate: '2008',
          endDate: '2012'
        }
      ],
      summary: [
        `Completed a double-major in Physics and Computer Science, and studied
        a full-spectrum of courses within the Computer Science field including
        Compilers, Networking, Software Engineering and Computability Theory.
        My most valuable skill was learning the ability to deeply analyze
        algorithms and analyze their complexity, enabling me to develop code
        that is both efficient and easily understood by my peers.`
      ],
      achievements: [
        '4.0 GPA in Physics, 3.8 in CS',
        'Graduated Magna Cum Laude',
        'Dean’s List all 8 semesters',
        'Dean’s Scholar in Physics, receiving the highest GPA in class'
      ]
    }
  ];

  const certCount = authorities
    .flatMap(a => a.certs)
    .filter(c => !c.endDate)
    .length;

  const bio = {
    headline: `Sr Manager & TA Lead at Fortimize. ${certCount}x certs & accreditations.`,
    summary: [
      `I lead our team of developers and technical architects to build scalable
      solutions on the Salesforce platform in the banking and real estate
      industries, and integrate Salesforce with our clients' backend systems.
      With my background in Java web development, I bring strong technical
      expertise in both backend and frontend development. I enjoy continuously
      learning new technologies and supporting my team support throughout our
      sales and delivery process.`
    ]
  };
</script>

<svelte:head>
  <title>Brendan Conniff &mdash; Resume</title>
  <meta name="description" content="Resume for Brendan Conniff, Sr Manager at Fortimize" />
</svelte:head>

<ResumeContainer name="Brendan Conniff" email="brendan.conniff@gmail.com">
  <ResumeBioCard title="Summary" {bio} />
  <ResumeExperiencesCard title="Work Experience" experiences={work} />
  <ResumeExperiencesCard title="Education" experiences={education} />
  <ResumeCertificationsCard title="Certifications" {authorities} />
  <ResumeSkillsCard title="Additional Skills" {skills} />
</ResumeContainer>
