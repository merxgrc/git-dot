#!/usr/bin/env node

const { Command } = require('commander');
const simpleGit = require('simple-git');
const OpenAI = require("openai");

const program = new Command();
const git = simpleGit();
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

program
  .name("git-dot")
  .description("AI commit assistant")
  .action(main)

program.parse();

async function main() {
    const status = await git.status();
    if (status.staged.length === 0) {
        console.log('no changes added to commit (use "git add" and/or "git commit -a")');
        return;
    }

    const diff = await git.diff(["--cached"]);

    const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
            { role: "system", content: "You are a concise git commit assistant." },
            { 
                role: "user",
                content: `Generate a short, clear commit message summarizing these changes:\n\n${diff}`
            }
        ]
    });

    const aiMessage = completion.choices[0].message.content.trim();

    
    try {
        const result = await git.commit(aiMessage)
        console.log(result, result.summary)
    } catch(err) {
        console.error("commit failed:", err.message);
    }
    
}

