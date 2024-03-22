import path from 'node:path'
import { cwd } from 'node:process'
import pnp from 'pnpapi'
import { searchForWorkspaceRoot } from 'vite'

function pnpUswdsPackages(isUswds = false) {
  return {
    name: 'pnp-uswds-packages',
    config: (config) => {
      const isBuild = !config.envPrefix?.includes('STORYBOOK_')
      const uswdsPath = pnp.resolveToUnqualified('@uswds/uswds', cwd())
      const packagesPath = path.join(uswdsPath, 'packages')
      config.css = config.css ?? {}
      config.css.preprocessorOptions = config.css.preprocessorOptions ?? {}
      config.css.preprocessorOptions.scss = {
        ...config.css.preprocessorOptions?.scss,
        includePaths: [packagesPath],
      }

      config.server = config.server ?? {}
      config.server.fs = {
        ...config.server.fs,
        allow: [
          ...(config.server.fs?.allow ?? []),
          // search up for workspace root
          searchForWorkspaceRoot(process.cwd()),
          // your custom rules
          uswdsPath,
        ],
      }
      config.resolve = {
        ...(config.resolve ?? {}),
        alias: {
          ...(config.resolve.alias ?? {}),
          uswds: uswdsPath,
        },
      }

      if (isBuild) {
        config.build = config.build ?? {}
        config.build.lib = {
          ...(config.build.lib ?? {}),
          entry: isUswds
            ? path.resolve(uswdsPath, 'dist/css/uswds.css')
            : config.build.lib?.entry,
          formats: isUswds ? ['es'] : config.build.lib?.formats,
        }
      }

      return config
    },
  }
}

export default pnpUswdsPackages
