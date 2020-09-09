/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
const nodeUtil = require('util');
const shell = require('shelljs');
const chalk = require('chalk');
const simpleGit = require('simple-git');
const { program } = require('commander');

program.version('0.0.1');
program.parseAsync(process.argv);

const PWD = shell.pwd().stdout;

const printText = ({ text, type, color }) => console[type](chalk[color](text));

const logFormat = ({
  format, arg, type, color, level,
}) => {
  if (format === 'object') {
    // args.forEach((arg) => {
    console[type](nodeUtil.inspect(arg, { colors: true, depth: true }));
    // });
  }
  if (format === 'string') {
    // args.forEach((arg) => {
    console[type](chalk[color](arg));
    // });
  }
};

const makeLog = ({
  args, type, color, level,
}) => {
  const isObj = (arg) => typeof arg === 'object';
  const isStr = (arg) => typeof arg === 'string';

  const allBeString = args.every((arg) => (typeof arg === 'string'));

  if (allBeString) {
    logFormat({
      format: 'string', arg: args.join(' '), type, color, level,
    });
    return;
  }

  let countObj = 0;
  let countStr = 0;

  const isComplex = (obj, str) => (
    obj === 2 || (obj >= 1 && str >= 1)
  );

  let complexFlag = args.every((arg) => {
    if (isObj(arg)) {
      countObj += 1;
      return true;
    }
    if (isStr(arg)) {
      countStr += 1;
      return true;
    }
    if (isComplex(countObj, countStr)) {
      return false;
    }
    return true;
  });

  const isLastItem = (length, index) => (length - 2) - index;

  const complexTag = `[${level.toUpperCase()}]`;
  const finalComplexTag = [];

  const replaceTag = (length, replaceTo) => {
    let count = 0;
    while (count <= length) {
      finalComplexTag.push(replaceTo);
      count += 1;
    }
  };
  args.forEach((arg, index) => {
    if (complexFlag) {
      // console.log('complexFlag', complexFlag);
      printText({ text: complexTag, type, color });
      complexFlag = false;
    }
    if (isStr(arg)) {
      logFormat({
        format: 'string', arg, type, color, level,
      });
      return;
    }
    if (isObj(arg)) {
      logFormat({
        format: 'object', arg, type, color, level,
      });
    }
    if (isLastItem(args.length, index)) {
      replaceTag(complexTag.length, '-');
      printText({ text: finalComplexTag.join(''), type, color });
    }
  });
};

const levelDef = {
  success: {
    console: 'info',
    color: 'green',
  },
  log: {
    console: 'log',
    color: 'white',
  },
  info: {
    console: 'info',
    color: 'grey',
  },
  warn: {
    console: 'warn',
    color: 'yellow',
  },
  error: {
    console: 'error',
    color: 'red',
  },
};

const log = () => {};
Object.entries(levelDef).forEach(([key, level]) => {
  const allArgs = {
    type: level.console,
    color: level.color,
    level: key,
  };

  // if (key === 'log') {
  //   log = (...args) => makeLog({ args, ...allArgs });
  //   return;
  // }
  log[key] = (...args) => makeLog({ args, ...allArgs });
});

// log(PWD);
log.success(PWD);
log.info(PWD);
log.warn(PWD);
log.error(PWD);

const git = simpleGit({
  baseDir: PWD,
  binary: 'git',
  maxConcurrentProcesses: 2,
});

const onInit = (err, initResult) => {
  if (err) {
    log.error(err);
  }
  if (initResult) {
    log.error('a', initResult, [1, 2]);
  }
};

git.init(onInit);
