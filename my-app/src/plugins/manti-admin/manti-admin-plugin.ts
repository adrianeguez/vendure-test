import {PluginCommonModule, VendurePlugin} from '@vendure/core';
import path from 'path';
import {AdminUiExtension} from '@vendure/ui-devkit/compiler';

@VendurePlugin({
    imports: [
        PluginCommonModule
    ],
    configuration: config => config,
})
export class MantiAdminPlugin {
    static uiExtensions: AdminUiExtension = {
        extensionPath: path.join(__dirname, 'ui'),
        ngModules: [
            {
                type: 'lazy' as const,
                ngModuleFileName: 'manti-admin-ui-lazy.module.ts',
                ngModuleName: 'MantiAdminUiLazyModule',
                route: 'manti',
            },
            {
                type: 'shared' as const,
                ngModuleFileName: 'manti-admin-shared.module.ts',
                ngModuleName: 'MantiAdminSharedModule',
            },
        ],
    };
}
