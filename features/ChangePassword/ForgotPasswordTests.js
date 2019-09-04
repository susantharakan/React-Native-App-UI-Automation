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
  
});

Scenario("Validate forgot password, @regression @sanity @fp1", async function(I) {
 // verify forgot password
 loginAction.verifyforgotPassword(email);
 
});

