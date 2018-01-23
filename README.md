# navitiasdk-typescript

## How to install 
```
npm install https://github.com/CanalTP/navitiasdk-typescript
```
And add the types folder in your tsconfig.json :
```
{
  "compilerOptions": {
    "typeRoots": [
      "node_modules/navitiasdk-typescript/@types",
    ]
  }
}  
```

## How to use
Add this Typescript definition reference at the header of your ts file
```
///<reference types="navitia-sdk"/>
///<reference types="navitia-sdk-ux"/>
```

Import, declare and type your NavitiaSDK
```
import {NavitiaSDKApi} from "navitia-sdk";
import {NavitiaSDKUXApi} from "navitia-sdk-ux";

declare var NavitiaSDK: NavitiaSDKApi;
declare var NavitiaSDKUX: NavitiaSDKUXApi;
```
