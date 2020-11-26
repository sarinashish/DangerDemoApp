import { message, danger } from "danger";
const modifiedMD = danger.git.modified_files.join("_ ");
message("Changed Files in the PR: \n - " + modifiedMD);