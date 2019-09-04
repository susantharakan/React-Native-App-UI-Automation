Feature("Forgotten Password");
let envAuth;
let envAuthRawData = "data/envs/envAuth.yaml";
let imports;
let loginAction;
let email;

Before(function(I, commonActions) {
  imports = commonActions.importActions();
  envAuth = commonActions.readYaml(envAuthRawData);
  zip = envAuth.zip;
  email= envAuth.email;
  loginAction = eval(imports.loginActions);
  loginAction._init(commonActions);
  footerMenuAction = eval(imports.footerMenuActions);
  footerMenuAction._init(commonActions);
  
});

Scenario("Validate change password, @cp", async function(I) {
 // verify change password
  // Authenticate               Try to avoid any test accounts as it will mess the passwords which can fail other test
  loginAction.PHlogin("dummy1@test.com", "pizzahut1");// Please make sure this is the Current password. 
  footerMenuAction.tapAccount();                    
  loginAction.changePassword( "pizzahut1", "pizzahut2"); // Provide the current password and the new password here
 
});

