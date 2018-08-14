# Sitecore Commerce Base

This repository will server as the base solution you need to get started on the Sitecore Experience Commerce 9 Update 2.

This solution is meant to be used for both the Commerce Engine projects and the Commerce Website projects. Please customize your gulp.js to build appropriately.

Once you clone the repository, you would need to do the following:

1. Change the name of the Solution
2. Get the Thumbprint from wwwroot/CommerceAuthoring_Sc9/wwwroot/config.json and update it in your project Sitecore.Commerce.Engine/wwwroot/config.json
3. OPTIONAL - Setup your local environment to start developing and debugging. Follow this video for help: [https://www.konabos.com/blog/set-up-your-local-environment-for-debugging-sitecore-experience-commerce-xc-9-update-2-in-powerful-ways-while-being-a-friend/](https://www.konabos.com/blog/set-up-your-local-environment-for-debugging-sitecore-experience-commerce-xc-9-update-2-in-powerful-ways-while-being-a-friend/)
4. Modify gulp.config to point to the right paths and the urls
5. Use the Task Runner Explorer and run the 01-Build-Commerce-Engine
6. Use the Task Runner Explorer and run the 02-Publish-Commerce-Engine-To-Instances
