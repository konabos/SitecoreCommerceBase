module.exports = function () {
    var webroot = "C:\\inetpub\\wwwroot";
    var config = {
        sitecoreRoot: webroot + "\\cateringdemo.dev.local",
        engineAuthoringRoot: webroot + "\\CommerceAuthoring_Sc9",
        engineShopsRoot: webroot + "\\CommerceShops_Sc9",
        engineOpsRoot: webroot + "\\CommerceOps_Sc9",
        engineMinionsRoot: webroot + "\\CommerceMinions_Sc9",
        solutionName: "Konabos.Sitecore.Commerce",
        engineProjectPath: "./3. Project/Project.Commerce/Sitecore.Commerce.Engine",
        featureProjectPath: "./2. Feature/Feature.Compare/Website/Feature.Compare.Website",
        websiteRoot: webroot + "\\cateringdemo.dev.local",
        buildConfiguration: "Debug",
        buildToolsVersion: 15.0,
        buildMaxCpuCount: 0,
        buildVerbosity: "minimal",
        buildPlatform: "Any CPU",
        publishPlatform: "AnyCpu",
        runCleanBuilds: true,
        MSBuildToolsVersion: 'auto'
    };
    return config;
}