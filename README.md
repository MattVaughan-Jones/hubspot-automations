This repository contains code that supports Winki's use of hubspot. It includes:
- Solar Choice API integration to import leads into Hubspot

### Project structure
This is a TS project.
/src is the root directory
Code within the root dir is organised into:
 - controllers
   Each distinct API that we connect to will have its own controller.
 - routes
   Each distinct API that we connect to will have its own router.
 - services
   Functions re-used in the controller are extracted into services, to keep the logic of the controller cleaner.
 - utils
   Utility functions do not pertain to specific business logic, and may be used across different features.