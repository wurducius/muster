const deploy = require("./scripts/deploy")
const { info, error, success } = require("./util/log")

info("Deploying project...")
const resultCode = deploy()
if (!resultCode) {
  success("Successfully deployed project.")
} else {
  error("Deployment of project failed.")
}
