import {CognitoUserPool} from 'amazon-cognito-identity-js';

const poolData ={
    UserPoolId:"ap-southeast-1_ymv58CChY",
    ClientId:"0eb3d592-4c7d-4bbb-befb-38b32a9e86fd"
}


export default new CognitoUserPool(poolData);