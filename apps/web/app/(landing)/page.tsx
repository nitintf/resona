import { Box } from '@resona/ui';

export default async function Index() {
  return (
    <div>
      <Box as={'main'}>
        <h1>Resona</h1>
        <a href="http://app.localhost:3000/welcome">Go to Auth</a>
      </Box>
    </div>
  );
}
