"use strict";(self.webpackChunksake=self.webpackChunksake||[]).push([[950],{8755:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>t});var s=r(5893),a=r(1151);const c={},o="Recipes",i={id:"recipes",title:"Recipes",description:"A list of useful recipes.",source:"@site/../../sake/docs/recipes.md",sourceDirName:".",slug:"/recipes",permalink:"/recipes",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Examples",permalink:"/examples"},next:{title:"Config Reference",permalink:"/config-reference"}},l={},t=[{value:"Validate Config",id:"validate-config",level:2},{value:"Upload File",id:"upload-file",level:2},{value:"Download File",id:"download-file",level:2},{value:"SSH to Server Using <code>sake</code>",id:"ssh-to-server-using-sake",level:2},{value:"Run Command and SSH Afterwords",id:"run-command-and-ssh-afterwords",level:2},{value:"Create SSH Tunnel / Port Forward",id:"create-ssh-tunnel--port-forward",level:2},{value:"Attach to a Docker Container on a Remote Server",id:"attach-to-a-docker-container-on-a-remote-server",level:2},{value:"Run a Local Script on a Remote Server",id:"run-a-local-script-on-a-remote-server",level:2},{value:"Replace Current Process",id:"replace-current-process",level:2},{value:"Change Shell",id:"change-shell",level:2},{value:"Change Default Behavior of <code>sake</code>",id:"change-default-behavior-of-sake",level:2},{value:"Invoke <code>sake</code> From Any Directory",id:"invoke-sake-from-any-directory",level:2},{value:"Import a Default User Config for Any <code>sake</code> Project",id:"import-a-default-user-config-for-any-sake-project",level:2},{value:"What&#39;s the Difference Between TTY, Attach and Local?",id:"whats-the-difference-between-tty-attach-and-local",level:2},{value:"Disable Colors",id:"disable-colors",level:2},{value:"Performing a Dry Run",id:"performing-a-dry-run",level:2},{value:"Edit a Config, Task or Server via <code>sake</code>",id:"edit-a-config-task-or-server-via-sake",level:2},{value:"Modify Theme",id:"modify-theme",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"recipes",children:"Recipes"}),"\n",(0,s.jsx)(n.p,{children:"A list of useful recipes."}),"\n",(0,s.jsx)(n.h2,{id:"validate-config",children:"Validate Config"}),"\n",(0,s.jsx)(n.p,{children:"To check for syntax errors and invalid configurations run:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ sake check\n"})}),"\n",(0,s.jsx)(n.h2,{id:"upload-file",children:"Upload File"}),"\n",(0,s.jsxs)(n.p,{children:["A common use-case is to upload a file to a server. ",(0,s.jsx)(n.code,{children:"sake"})," doesn't come with any built-in task to accomplish this, but it's quite easy to define one yourself:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'upload:\n  desc: upload file or directory\n  env:\n    SRC: ""\n    DEST: ""\n  local: true # Command should be run from local host\n  cmd: rsync --recursive --verbose --archive --update $SRC $S_HOST:$DEST\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Then you can refer to the ",(0,s.jsx)(n.code,{children:"upload"})," task:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'upload-compose:\n  desc: upload docker-compose\n  env:\n    SRC: "./docker-compose.yaml"\n    DEST: "/tmp/docker-compose.yaml"\n  task: upload\n'})}),"\n",(0,s.jsx)(n.p,{children:"To upload a file:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ sake run get-backups --server <server>\n"})}),"\n",(0,s.jsxs)(n.p,{children:["You can also override the ",(0,s.jsx)(n.code,{children:"SRC"})," and ",(0,s.jsx)(n.code,{children:"DEST"})," variables at the command line:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ sake run upload --server <server> SRC=/some/file DEST=/some/file\n"})}),"\n",(0,s.jsx)(n.p,{children:"Note that rsync is required both on the client and remote machine."}),"\n",(0,s.jsx)(n.h2,{id:"download-file",children:"Download File"}),"\n",(0,s.jsxs)(n.p,{children:["A common use-case is to download a file or directory from a server. ",(0,s.jsx)(n.code,{children:"sake"})," doesn't come with any built-in task to accomplish this, but it's quite easy to define one yourself:"]}),"\n",(0,s.jsxs)(n.p,{children:["Define the ",(0,s.jsx)(n.code,{children:"download"})," task:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'download:\n  desc: download file or directory\n  env:\n    SRC: ""\n    DEST: ""\n  local: true # Command should be run from local host\n  cmd: rsync --recursive --verbose --archive --update $S_HOST:$SRC $DEST\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Then you can refer to the ",(0,s.jsx)(n.code,{children:"download"})," task:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'get-backups:\n  desc: get backups from remote server\n  env:\n    SRC: "/tmp/backup.db"\n    DEST: "backup.db"\n  task: download\n'})}),"\n",(0,s.jsx)(n.p,{children:"To download backups:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ sake run get-backups --server <server>\n"})}),"\n",(0,s.jsxs)(n.p,{children:["You can also override the ",(0,s.jsx)(n.code,{children:"SRC"})," and ",(0,s.jsx)(n.code,{children:"DEST"})," variables at the command line:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ sake run download --server <server> SRC=/some/file DEST=/some/file\n"})}),"\n",(0,s.jsx)(n.p,{children:"Note that rsync is required both on the client and remote machine."}),"\n",(0,s.jsxs)(n.h2,{id:"ssh-to-server-using-sake",children:["SSH to Server Using ",(0,s.jsx)(n.code,{children:"sake"})]}),"\n",(0,s.jsxs)(n.p,{children:["You can SSH to any server via ",(0,s.jsx)(n.code,{children:"sake ssh <server>"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"run-command-and-ssh-afterwords",children:"Run Command and SSH Afterwords"}),"\n",(0,s.jsxs)(n.p,{children:["Sometimes you want to run a command and then ",(0,s.jsx)(n.code,{children:"ssh"})," into the server:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"ssh-and-cmd:\n  desc: run command and ssh to server after\n  attach: true # Attach will SSH to server\n  cmd: ls -alh\n"})}),"\n",(0,s.jsx)(n.p,{children:"Then run:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ sake run get-backups --server <server>\n"})}),"\n",(0,s.jsxs)(n.p,{children:["You can also provide the ",(0,s.jsx)(n.code,{children:"--attach"})," flag to arbitrary commands:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ sake run some-task --server <server> --attach\n"})}),"\n",(0,s.jsx)(n.h2,{id:"create-ssh-tunnel--port-forward",children:"Create SSH Tunnel / Port Forward"}),"\n",(0,s.jsx)(n.p,{children:"Create a SSH tunnel:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"ssh-tunnel:\n  desc: create ssh tunnel\n  tty: true # Replacing the current process is necessary if you want to be able to kill the tunnel (in order to respond SIGINT signals)\n  env:\n    LOCAL:\n    REMOTE:\n  cmd: ssh $S_USER@$S_HOST -N -L $LOCAL:localhost:$REMOTE\n"})}),"\n",(0,s.jsx)(n.p,{children:"Then run:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ sake run ssh-tunnel --server <server> LOCAL=8000 REMOTE=LOCAL=8000\n"})}),"\n",(0,s.jsx)(n.h2,{id:"attach-to-a-docker-container-on-a-remote-server",children:"Attach to a Docker Container on a Remote Server"}),"\n",(0,s.jsx)(n.p,{children:"If you have a bunch of Docker containers running on a remote server, you can easily SSH into a remote server and attach to a Docker container."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'docker-exec:\n  desc: attach to docker container\n  env:\n    NAME: ""\n  tty: true # Replacing the current process is necessary since SSH requires TTY if you wish to exec to a container\n  cmd: ssh -t $S_USER@$S_HOST "docker exec -it $NAME bash"\n'})}),"\n",(0,s.jsx)(n.p,{children:"Then you can run:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ sake run docker-exec --server <server> NAME=<container-name>\n"})}),"\n",(0,s.jsx)(n.h2,{id:"run-a-local-script-on-a-remote-server",children:"Run a Local Script on a Remote Server"}),"\n",(0,s.jsx)(n.p,{children:"Sometimes you have bash script that you want to run on the remote server and after it's done, remove it.\nWe can do that by defining the following script:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'script:\n  desc: run local script on remote server\n  env:\n    FILE: ""\n  local: true\n  cmd: |\n    # Get filename\n    file=$(basename $FILE)\n\n    # Create temp file\n    temp_file="$(mktemp /tmp/$FILE.XXXXXXXXX -u)"\n\n    # Upload script\n    rsync --compress --recursive --archive --update $FILE $S_HOST:$temp_file\n\n    # Run script\n    ssh $S_USER@$S_HOST "$temp_file"\n\n    # Remove script\n    ssh $S_USER@$S_HOST "rm $temp_file"\n'})}),"\n",(0,s.jsx)(n.p,{children:"Then run:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ sake run script --server <server> FILE=./script.sh\n"})}),"\n",(0,s.jsx)(n.h2,{id:"replace-current-process",children:"Replace Current Process"}),"\n",(0,s.jsxs)(n.p,{children:["Normally ",(0,s.jsx)(n.code,{children:"sake"})," runs the commands in a new process but you're able to circumvent this by using the ",(0,s.jsx)(n.code,{children:"tty: true"})," setting or provide the ",(0,s.jsx)(n.code,{children:"--tty"})," flag. You rarely need to do this, but there are occassions when it's required, for instance, when you're running interactive tasks that require TTY."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"echo:\n  tty: true\n  cmd: echo 123\n"})}),"\n",(0,s.jsx)(n.h2,{id:"change-shell",children:"Change Shell"}),"\n",(0,s.jsxs)(n.p,{children:["You can change the default ",(0,s.jsx)(n.code,{children:"shell"})," for tasks by setting the ",(0,s.jsx)(n.code,{children:"shell"})," property in the global scope, server section or the task section (nested tasks/commands included)."]}),"\n",(0,s.jsx)(n.p,{children:"The order of precedence is as follows (first takes precedence):"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"task list"}),"\n",(0,s.jsx)(n.li,{children:"task"}),"\n",(0,s.jsx)(n.li,{children:"referenced task"}),"\n",(0,s.jsx)(n.li,{children:"server"}),"\n",(0,s.jsx)(n.li,{children:"global"}),"\n",(0,s.jsxs)(n.li,{children:["default which is ",(0,s.jsx)(n.code,{children:"bash"})," for Linux, ",(0,s.jsx)(n.code,{children:"powershell"})," for windows, and ",(0,s.jsx)(n.code,{children:"zsh"})," for MacOS."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"For remote servers, the default shell is the users default shell."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"\nshell: bash # 5\n\nservers:\n  localhost:\n    host: localhost\n    shell: bash # 4\n    local: true\n\ntasks:\n  work-ref:\n    name: pwd\n    shell: bash # 3\n    cmd: pwd\n\n  work-dir:\n    shell: bash # 2\n    tasks:\n      - task: work-ref\n\n      - cmd: pwd\n        name: pwd\n\n      - cmd: pwd\n        name: pwd\n        shell: bash # 1\n"})}),"\n",(0,s.jsxs)(n.h2,{id:"change-default-behavior-of-sake",children:["Change Default Behavior of ",(0,s.jsx)(n.code,{children:"sake"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"sake"})," comes with default definitions for ",(0,s.jsx)(n.code,{children:"specs"}),", ",(0,s.jsx)(n.code,{children:"targets"})," and ",(0,s.jsx)(n.code,{children:"themes"})," (see ",(0,s.jsx)(n.a,{href:"config-reference",children:"config reference"})," for their default values). This means when you run ",(0,s.jsx)(n.code,{children:"sake list servers"})," or ",(0,s.jsx)(n.code,{children:"sake run <task>"})," without specifying any spec/target/theme on the command line or in the config, it will use the default definition for those primitives.\nTo override the default config, we can define a spec/target/theme that has the name ",(0,s.jsx)(n.code,{children:"default"}),":"]}),"\n",(0,s.jsx)(n.p,{children:"For instance, let's target all servers by default:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"targets:\n default:\n   all: true\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Now when you run ",(0,s.jsx)(n.code,{children:"sake run <task>"}),", it will target all servers by default."]}),"\n",(0,s.jsxs)(n.h2,{id:"invoke-sake-from-any-directory",children:["Invoke ",(0,s.jsx)(n.code,{children:"sake"})," From Any Directory"]}),"\n",(0,s.jsxs)(n.p,{children:["When you invoke a ",(0,s.jsx)(n.code,{children:"sake"})," command it will check the current directory and all parent directories for the following files: ",(0,s.jsx)(n.code,{children:"sake.yaml"}),", ",(0,s.jsx)(n.code,{children:"sake.yml"}),", ",(0,s.jsx)(n.code,{children:".sake.yaml"}),", ",(0,s.jsx)(n.code,{children:".sake.yml"}),". If you wish to invoke ",(0,s.jsx)(n.code,{children:"sake"})," from any directory, you can:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["set the environment variable to ",(0,s.jsx)(n.code,{children:"SAKE_CONFIG=/path/to/my/config"}),", or"]}),"\n",(0,s.jsxs)(n.li,{children:["specify a runtime flag ",(0,s.jsx)(n.code,{children:"sake list servers --config /path/to/my/config"})]}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"import-a-default-user-config-for-any-sake-project",children:["Import a Default User Config for Any ",(0,s.jsx)(n.code,{children:"sake"})," Project"]}),"\n",(0,s.jsxs)(n.p,{children:["By default ",(0,s.jsx)(n.code,{children:"sake"})," will attempt to load a config file (if it exists) from your default config directory:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Linux: ",(0,s.jsx)(n.code,{children:"$XDG_CONFIG_HOME/sake/config.yaml"})," or ",(0,s.jsx)(n.code,{children:"$HOME/.config/sake/config.yaml"})," if ",(0,s.jsx)(n.code,{children:"$XDG_CONFIG_HOME"})," is not set."]}),"\n",(0,s.jsxs)(n.li,{children:["Darwin: ",(0,s.jsx)(n.code,{children:"$HOME/Library/Application/sake/config.yaml"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"You can override this location by:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["setting the environment variable to ",(0,s.jsx)(n.code,{children:"SAKE_USER_CONFIG=/path/to/my/config"}),", or"]}),"\n",(0,s.jsxs)(n.li,{children:["specifying a runtime flag ",(0,s.jsx)(n.code,{children:"sake list servers --user-config /path/to/my/config"})]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"whats-the-difference-between-tty-attach-and-local",children:"What's the Difference Between TTY, Attach and Local?"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["When specifying ",(0,s.jsx)(n.code,{children:"tty: true"})," in a task config, the calling executable will be replaced by the command invoked by the task. This is useful when you require ",(0,s.jsx)(n.code,{children:"tty"}),", for instance if you want to SSH and then attach to a running Docker container"]}),"\n",(0,s.jsxs)(n.li,{children:["If ",(0,s.jsx)(n.code,{children:"attach: true"})," is set in a task config, then after running all the commands, ",(0,s.jsx)(n.code,{children:"sake"})," will SSH into the first remote server"]}),"\n",(0,s.jsxs)(n.li,{children:["Setting ",(0,s.jsx)(n.code,{children:"local: true"})," means the task will be executed on localhost, this can be useful for tasks that upload files via ",(0,s.jsx)(n.code,{children:"rsync"})," for instance"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"disable-colors",children:"Disable Colors"}),"\n",(0,s.jsxs)(n.p,{children:["To disable colors from ",(0,s.jsx)(n.code,{children:"sake"}),", either add the flag ",(0,s.jsx)(n.code,{children:"--no-color"})," or set the environment variable ",(0,s.jsx)(n.code,{children:"NO_COLOR"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"performing-a-dry-run",children:"Performing a Dry Run"}),"\n",(0,s.jsxs)(n.p,{children:["If you wish to perform a dry run you can do so by adding the flag ",(0,s.jsx)(n.code,{children:"--dry-run"}),". It will then only print out the task for each server."]}),"\n",(0,s.jsxs)(n.h2,{id:"edit-a-config-task-or-server-via-sake",children:["Edit a Config, Task or Server via ",(0,s.jsx)(n.code,{children:"sake"})]}),"\n",(0,s.jsxs)(n.p,{children:["You can open up your preferred editor and edit a ",(0,s.jsx)(n.code,{children:"sake"})," config directly via ",(0,s.jsx)(n.code,{children:"sake edit [task|server] [name]"}),". For this to work, the ",(0,s.jsx)(n.code,{children:"EDITOR"})," environment variable must be set."]}),"\n",(0,s.jsx)(n.h2,{id:"modify-theme",children:"Modify Theme"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"sake"})," allows you to modify the output of tasks by creating themes for different situations. You can do so either inline when defining tasks, refer to a theme in from the global ",(0,s.jsx)(n.code,{children:"themes"})," definition, or provide the ",(0,s.jsx)(n.code,{children:"--theme"})," flag.\nA ",(0,s.jsx)(n.code,{children:"theme"})," has two objects that alter the style of the different outputs: ",(0,s.jsx)(n.code,{children:"text"})," and ",(0,s.jsx)(n.code,{children:"table"}),". See the ",(0,s.jsx)(n.a,{href:"/config-reference",children:"config-reference"})," document for more details."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'themes:\n  advanced:\n    text:\n      prefix: true\n      prefix_colors: [red,green,blue]\n      header: "TASK"\n      header_filler: "-"\n\n    table:\n      style: connected-light\n\ntasks:\n  ping:\n    cmd: echo pong\n    theme: advanced\n    # or define inline\n    theme:\n      text:\n        prefix: true\n\n      table:\n        style: connected-light\n'})})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>i,a:()=>o});var s=r(7294);const a={},c=s.createContext(a);function o(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);