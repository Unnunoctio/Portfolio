/* eslint-disable @typescript-eslint/strict-boolean-expressions */

interface SkillBadgeProps {
  code: string
  name: string
}

export const SkillBadge: React.FC<SkillBadgeProps> = ({ code, name }): React.ReactNode => {
  return (
    <span
      className={'inline-flex items-center px-2 py-1 text-xs rounded-full ring-1 ring-inset ' +
        (
          (code === 'node' ? 'bg-skill-node/20 ring-skill-node' : '') ||
          (code === 'react' ? 'bg-skill-react/20 ring-skill-react' : '') ||
          (code === 'html' ? 'bg-skill-html/20 ring-skill-html' : '') ||
          (code === 'css' ? 'bg-skill-css/20 ring-skill-css' : '') ||
          (code === 'js' ? 'bg-skill-js/20 ring-skill-js' : '') ||
          (code === 'ts' ? 'bg-skill-ts/20 ring-skill-ts' : '') ||
          (code === 'mysql' ? 'bg-skill-mysql/20 ring-skill-mysql' : '') ||
          (code === 'mongo' ? 'bg-skill-mongo/20 ring-skill-mongo' : '') ||
          (code === 'graphql' ? ('bg-skill-graphql/20 ring-skill-graphql') : '') ||
          (code === 'api' ? 'bg-skill-api/20 ring-skill-api' : '')
        )}
    >
      {name}
    </span>
  )
}
