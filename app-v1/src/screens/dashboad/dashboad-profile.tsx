import { Link } from 'expo-router';

import { Button } from '~/src/components/ui/button';
import { CircleUserRound } from '~/src/icons/icons';

export const DashboadProfile = () => {
  return (
    <Link href='/profile' asChild>
      <Button className='web:me-2' variant={'link'} size={'icon'}>
        <CircleUserRound className='text-foreground' size={30} strokeWidth={1.25}></CircleUserRound>
      </Button>
    </Link>
  );
}
