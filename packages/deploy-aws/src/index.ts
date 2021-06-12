/* eslint-disable @typescript-eslint/no-var-requires */
const execa = require('execa');
const { hideBin } = require('yargs/helpers');
const yargs = require('yargs/yargs');

const argv = yargs(hideBin(process.argv))
  .option('target', {
    type: 'string',
    description: 'Target directory',
  })
  .option('bucket', {
    type: 'string',
    description: 'S3 bucket name to deploy',
  })
  .option('distribution', {
    type: 'string',
    description: 'CloudFront distribution',
  })
  .demandOption(['target', 'bucket', 'distribution']).argv;

void (async () => {
  const { bucket, distribution, target } = argv;
  console.log('S3 sync start');
  const { stdout: s3stdout } = await execa('aws', [
    's3',
    'sync',
    target,
    bucket,
  ]).catch((e: Error) => {
    console.error('S3 sync failure');
    console.error(e);
    process.exit(1);
  });
  console.log(s3stdout);
  console.log('S3 sync done');
  console.log('CloudFront invalidation start');
  const { stdout: cfstdout } = await execa('aws', [
    'cloudfront',
    'create-invalidation',
    '--distribution-id',
    distribution,
    '--paths',
    '/*',
  ]);
  console.log(cfstdout);
  console.log('CloudFront invalidation done');
})();
