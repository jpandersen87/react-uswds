import path from "node:path";
import { cwd } from "node:process";
import pnp from "pnpapi";
import { searchForWorkspaceRoot } from "vite";

function pnpUswdsPackages() {
    return {
        name: "pnp-uswds-packages",
        config: (config) => {
            const uswdsPath = pnp.resolveToUnqualified("@uswds/uswds", cwd());
            const packagesPath = path.join(uswdsPath, "packages");
            console.log(config);
            return {
                css: {
                    ...config.css,
                    preprocessorOptions: {
                        scss: {
                            includePaths: [packagesPath],
                        },
                    },
                },
                server: {
                    ...config.server,
                    fs: {
                        allow: [
                            // search up for workspace root
                            searchForWorkspaceRoot(process.cwd()),
                            // your custom rules
                            uswdsPath,
                        ],
                    },
                },
            };
        },
    };
}

export default pnpUswdsPackages;
