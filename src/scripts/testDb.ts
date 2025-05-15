import prisma from '../lib/prisma';

async function main() {
  const count = await prisma.activityEvent.count();
  console.log(`ActivityEvent count: ${count}`);
  process.exit(0);
}

main().catch(e => {
  console.error(e);
  process.exit(1);
});
