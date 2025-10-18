#!/usr/bin/env node

const { Command } = require('commander');
const simpleGit = require('simple-git');

const program = new Command();
const git = simpleGit();

program
  .name("git-dot")
  .description("AI commit assistant")
  .action(main)

program.parse();

async function main() {
    try {
        const result = await git.commit("Test message")
        console.log(result.summary)
    } catch(err) {
        console.error("commit failed:", err.message);
    }
    
}

