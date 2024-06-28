#!/bin/bash

# ANSI color codes
RED='\033[0;31m'
GREEN='\033[0;32m'
CYAN='\033[0;36m'
NC='\033[0m'

SEPARATOR="----------------------------------------"

# Determine command based on flag
if [ "$1" == "--check" ]; then
    NX_COMMAND="format:check"
elif [ "$1" == "--write" ]; then
    NX_COMMAND="format:write"
else
    echo -e "${RED}Invalid argument. Use --check or --write.${NC}"
    exit 1
fi

# Run nx command and capture the output
output=$(nx $NX_COMMAND 2>&1)

# Capture the exit status
result=$?

# Check if the command failed
if [ $result -ne 0 ]; then
    echo -e "${RED}$SEPARATOR"
    echo -e "Error: Formatting check failed"
    echo -e "$SEPARATOR${NC}"
    echo -e "Files with formatting issues:\n$output\n"
    if [ "$NX_COMMAND" == "format:check" ]; then
        echo -e "${CYAN}Please run 'yarn format:write' to fix formatting issues."
    fi
    exit $result
fi

if [ "$NX_COMMAND" == "format:check" ]; then
    echo -e "${GREEN}Formatting check passed successfully.${NC}"
else
    echo -e "${GREEN}Formatting issues fixed successfully.${NC}"
fi
