tmux kill-session -t azure-functions-playground
tmux start-server
tmux new-session -d -s azure-functions-playground -n host
tmux send-keys -t azure-functions-playground:host "func host start --language-worker -- \"--inspect=5858\"" C-m
