import { Component } from '@angular/core';

@Component({
  selector: 'app-right-column',
  imports: [],
  templateUrl: './right-column.html',
  styleUrl: './right-column.css',
})
export class RightColumn {
  skills = [
    {
      title: 'Back-end',
      items: [
        {
          name: 'Java',
          icon: 'https://go-skill-icons.vercel.app/api/icons?i=java&theme=light',
        },
        {
          name: 'Spring',
          icon: 'https://go-skill-icons.vercel.app/api/icons?i=spring&theme=light',
        },
        {
          name: 'Typescript',
          icon: 'https://go-skill-icons.vercel.app/api/icons?i=typescript&theme=light',
        },
      ],
    },
    {
      title: 'Database',
      items: [
        {
          name: 'Oracle',
          icon: 'https://go-skill-icons.vercel.app/api/icons?i=oracle&theme=light',
        },
        {
          name: 'Mysql',
          icon: 'https://go-skill-icons.vercel.app/api/icons?i=mysql&theme=light',
        },
      ],
    },
    {
      title: 'VCS',
      items: [
        {
          name: 'Git',
          icon: 'https://go-skill-icons.vercel.app/api/icons?i=git&theme=light',
        },
        {
          name: 'Github',
          icon: 'https://go-skill-icons.vercel.app/api/icons?i=github&theme=light',
        },
        {
          name: 'Github Actions',
          icon: 'https://go-skill-icons.vercel.app/api/icons?i=githubactions&theme=light',
        },
        {
          name: 'Gitlab',
          icon: 'https://go-skill-icons.vercel.app/api/icons?i=gitlab&theme=light',
        },
        {
          name: 'Bitbucket',
          icon: 'https://go-skill-icons.vercel.app/api/icons?i=bitbucket&theme=light',
        },
      ],
    },
    {
      title: 'IDE',
      items: [
        {
          name: 'Visual Studio Code',
          icon: 'https://go-skill-icons.vercel.app/api/icons?i=vscode&theme=light',
        },
        {
          name: 'InteliJIdea',
          icon: 'https://go-skill-icons.vercel.app/api/icons?i=idea&theme=light',
        },
      ],
    },
    {
      title: 'Utilities',
      items: [
        {
          name: 'Jira',
          icon: 'https://go-skill-icons.vercel.app/api/icons?i=jira&theme=light',
        },
        {
          name: 'Sonarqube',
          icon: 'https://go-skill-icons.vercel.app/api/icons?i=sonarqube&theme=light',
        },
        {
          name: 'Chatgpt',
          icon: 'https://go-skill-icons.vercel.app/api/icons?i=chatgpt&theme=light',
        },
        {
          name: 'Bash',
          icon: 'https://go-skill-icons.vercel.app/api/icons?i=bash&theme=light',
        },
        {
          name: 'Linux',
          icon: 'https://go-skill-icons.vercel.app/api/icons?i=linux&theme=light',
        },
      ],
    },
    {
      title: 'Front-end',
      items: [
        {
          name: 'Html',
          icon: 'https://go-skill-icons.vercel.app/api/icons?i=html&theme=light',
        },
        {
          name: 'CSS',
          icon: 'https://go-skill-icons.vercel.app/api/icons?i=css&theme=light',
        },
        {
          name: 'Tailwind',
          icon: 'https://go-skill-icons.vercel.app/api/icons?i=tailwind&theme=light',
        },
        {
          name: 'JavaScript',
          icon: 'https://go-skill-icons.vercel.app/api/icons?i=js&theme=light',
        },
        {
          name: 'Angular',
          icon: 'https://go-skill-icons.vercel.app/api/icons?i=angular&theme=light',
        },
      ],
    },
    {
      title: 'Build & Package',
      items: [
        {
          name: 'Maven',
          icon: 'https://go-skill-icons.vercel.app/api/icons?i=maven&theme=light',
        },
        {
          name: 'gradle',
          icon: 'https://skillicons.dev/icons?i=gradle&theme=light',
        },
        {
          name: 'jenkins',
          icon: 'https://go-skill-icons.vercel.app/api/icons?i=jenkins&theme=light',
        },
        {
          name: 'Docker',
          icon: 'https://go-skill-icons.vercel.app/api/icons?i=docker&theme=light',
        },
      ],
    },
  ];

  sports = [
    {
      title: "Running"
    },
     {
      title: "Volleyball"
    },
     {
      title: "Boxing"
    },
     {
      title: "Swimming"
    }
  ]
}
