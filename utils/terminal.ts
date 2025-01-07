export const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const generateAsciiArt = (text: string) => {
  return `
███    ██ ██ ██   ██  █████  ██████  ██    ██ 
████   ██ ██ ██  ██  ██   ██ ██   ██ ██    ██ 
██ ██  ██ ██ █████   ███████ ██████  ██    ██ 
██  ██ ██ ██ ██  ██  ██   ██ ██   ██ ██    ██ 
██   ████ ██ ██   ██ ██   ██ ██   ██  ██████  
`;
};

export const commands = {
  help: 'Available commands: help, about, clear, twitter',
  about: 'NIKARU TERMINAL - A cyberpunk-inspired command line interface',
  twitter: 'Twitter: @TerminalNikaru',
  clear: 'Clearing terminal...',
};

