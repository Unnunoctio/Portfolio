import { column, defineDb, defineTable } from 'astro:db';

const About = defineTable({
  columns: {
    about_id: column.number({ primaryKey: true }),
    title: column.text(),
    sub_title: column.text(),
    biography: column.text(),
    avatar: column.text()
  }
})

const Contact = defineTable({
  columns: {
    contact_id: column.number({ primaryKey: true }),
    web_contact: column.text({ unique: true }),
    link: column.text({ unique: true }),
    styled_link: column.text({ unique: true })
  }
})

const Project = defineTable({
  columns: {
    project_id: column.number({ primaryKey: true }),
    order: column.number(),
    title: column.text({ unique: true }),
    path: column.text({ unique: true }),
    icon: column.text({ optional: true }),
    logo: column.text({ optional: true }),
    preview: column.text({ optional: true }),
    website: column.text({ optional: true }),
    repository: column.text({ unique: true }),
    github_id: column.number({ unique: true }),
    description: column.text({ optional: true }),
    is_ready: column.boolean(),
  }
})

const ProjectSkill = defineTable({
  columns: {
    project_id: column.number({ references: () => Project.columns.project_id }),
    skill_id: column.number({ references: () => Skill.columns.skill_id }),
  }
})

const Resume = defineTable({
  columns: {
    resume_id: column.number({ primaryKey: true }),
    code: column.text(),
    start_date: column.date(),
    end_date: column.date({ optional: true }),
    title: column.text(),
    company: column.text(),
    description: column.text({ optional: true })
  }
})

const Skill = defineTable({
  columns: {
    skill_id: column.number({ primaryKey: true }),
    order: column.number(),
    lang: column.text({ unique: true }),
    color: column.text()
  }
})

// https://astro.build/db/config
export default defineDb({
  tables: { About, Contact, Project, ProjectSkill, Resume, Skill }
});
