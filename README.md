# git-dot

An AI-powered Git commit assistant that automatically generates meaningful commit messages based on your staged changes.

## Features

- 🤖 Uses OpenAI's GPT-4o-mini to analyze your code changes
- ✨ Generates concise, clear commit messages automatically
- 🚀 Simple CLI interface
- ⚡ Works with your existing Git workflow

## Prerequisites

- Node.js (v14 or higher)
- Git
- OpenAI API key

## Installation

1. Clone this repository:
```bash
git clone https://github.com/merxgrc/git-dot.git
cd git-dot
```

2. Install dependencies:
```bash
npm install
```

3. Set up your OpenAI API key:
```bash
export OPENAI_API_KEY='your-api-key-here'
```

For permanent setup, add the above line to your `~/.bashrc` or `~/.zshrc` file.

4. (Optional) Install globally:
```bash
npm install -g .
```

## Usage

1. Stage your changes as usual:
```bash
git add <files>
```

2. Run git-dot instead of `git commit -m ""`:
```bash
git-dot
```

The tool will:
- Check for staged changes
- Analyze the diff
- Generate an AI-powered commit message
- Automatically commit with the generated message

## Example

```bash
$ git add index.js
$ git-dot
[main abc1234] Add AI-powered commit message generation feature
 1 file changed, 45 insertions(+)
```

## How It Works

1. **Checks for staged changes**: Ensures you have files added to the staging area
2. **Retrieves the diff**: Gets the diff of staged changes using `git diff --cached`
3. **Generates commit message**: Sends the diff to OpenAI's API for analysis
4. **Creates the commit**: Automatically commits with the AI-generated message

## Dependencies

- [commander](https://www.npmjs.com/package/commander) - Command-line interface
- [simple-git](https://www.npmjs.com/package/simple-git) - Git operations
- [openai](https://www.npmjs.com/package/openai) - OpenAI API integration
- [chalk](https://www.npmjs.com/package/chalk) - Terminal styling

## Environment Variables

- `OPENAI_API_KEY` (required): Your OpenAI API key

## Error Handling

- If no changes are staged, you'll see: `no changes added to commit (use "git add" and/or "git commit -a")`
- If the commit fails, an error message will be displayed

## License

ISC

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Author

Created by merxgrc
