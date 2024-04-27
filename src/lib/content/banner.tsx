import * as React from 'react';
import { IoIosStar } from 'react-icons/io';
import { PiMathOperationsLight } from 'react-icons/pi';

import Typography from '@/components/typography/Typography';
export const BANNER_CONTENT: (() => React.ReactNode)[] = [
  () => (
    <div className='flex flex-row justify-around'>
      <div className='bg-white rounded-3xl w-[30%] h-[128px] flex flex-col justify-around'>
        <div className='flex flex-row justify-start gap-4 ml-6'>
          <div className='bg-red-50 rounded-full p-2'>
            <PiMathOperationsLight size='28px' />
          </div>
          <div className='flex flex-col'>
            <Typography color='primary' variant='h4' className='flex'>
              Basic Math
            </Typography>
            <Typography color='tertiary' variant='h5' className='flex'>
              12 Lessons
            </Typography>
          </div>
        </div>
        <div className='flex flex-row justify-between mx-6'>
          <div className='flex flex-col'>
            <Typography color='tertiary' variant='h4'>
              Rate
            </Typography>
            <Typography
              color='secondary'
              variant='h5'
              className='flex flex-row'
            >
              <IoIosStar size='18px' color='gold' />
              4.8
            </Typography>
          </div>
          <div className='flex flex-col '>
            <Typography color='tertiary' variant='h4' className='flex'>
              Type
            </Typography>
            <Typography color='secondary' variant='h5' className='flex'>
              Mathematics
            </Typography>
          </div>
        </div>
      </div>
      <div className='bg-white rounded-3xl w-[30%] h-[128px] flex flex-col justify-around'>
        <div className='flex flex-row justify-start gap-4 ml-6'>
          <div className='bg-orange-50 rounded-full p-2'>
            <PiMathOperationsLight size='28px' />
          </div>
          <div className='flex flex-col'>
            <Typography color='primary' variant='h4' className='flex'>
              Basic Math
            </Typography>
            <Typography color='tertiary' variant='h5' className='flex'>
              12 Lessons
            </Typography>
          </div>
        </div>
        <div className='flex flex-row justify-between'>
          <div className='flex flex-col ml-6'>
            <Typography color='tertiary' variant='h4'>
              Rate
            </Typography>
            <Typography
              color='secondary'
              variant='h5'
              className='flex flex-row'
            >
              <IoIosStar size='18px' color='gold' />
              4.8
            </Typography>
          </div>
          <div className='flex flex-col mr-6 '>
            <Typography color='tertiary' variant='h4' className='flex'>
              Type
            </Typography>
            <Typography color='secondary' variant='h5' className='flex'>
              Mathematics
            </Typography>
          </div>
        </div>
      </div>
      <div className='bg-white rounded-3xl w-[30%] h-[128px] flex flex-col justify-around'>
        <div className='flex flex-row justify-start gap-4 ml-6'>
          <div className='bg-green-50 rounded-full p-2'>
            <PiMathOperationsLight size='28px' />
          </div>
          <div className='flex flex-col'>
            <Typography color='primary' variant='h4' className='flex'>
              Basic Math
            </Typography>
            <Typography color='tertiary' variant='h5' className='flex'>
              12 Lessons
            </Typography>
          </div>
        </div>
        <div className='flex flex-row justify-between'>
          <div className='flex flex-col ml-6'>
            <Typography color='tertiary' variant='h4'>
              Rate
            </Typography>
            <Typography
              color='secondary'
              variant='h5'
              className='flex flex-row'
            >
              <IoIosStar size='18px' color='gold' />
              4.8
            </Typography>
          </div>
          <div className='flex flex-col mr-6'>
            <Typography color='tertiary' variant='h4' className='flex'>
              Type
            </Typography>
            <Typography color='secondary' variant='h5' className='flex'>
              Mathematics
            </Typography>
          </div>
        </div>
      </div>
    </div>
  ),
  () => (
    <div className='flex flex-row justify-around'>
      <div className='bg-white rounded-3xl w-[30%] h-[128px] flex flex-col justify-around'>
        <div className='flex flex-row justify-start gap-4 ml-6'>
          <div className='bg-red-50 rounded-full p-2'>
            <PiMathOperationsLight size='28px' />
          </div>
          <div className='flex flex-col'>
            <Typography color='primary' variant='h4' className='flex'>
              Basic Math
            </Typography>
            <Typography color='tertiary' variant='h5' className='flex'>
              12 Lessons
            </Typography>
          </div>
        </div>
        <div className='flex flex-row justify-between mx-6'>
          <div className='flex flex-col'>
            <Typography color='tertiary' variant='h4'>
              Rate
            </Typography>
            <Typography
              color='secondary'
              variant='h5'
              className='flex flex-row'
            >
              <IoIosStar size='18px' color='gold' />
              4.8
            </Typography>
          </div>
          <div className='flex flex-col '>
            <Typography color='tertiary' variant='h4' className='flex'>
              Type
            </Typography>
            <Typography color='secondary' variant='h5' className='flex'>
              Mathematics
            </Typography>
          </div>
        </div>
      </div>
      <div className='bg-white rounded-3xl w-[30%] h-[128px] flex flex-col justify-around'>
        <div className='flex flex-row justify-start gap-4 ml-6'>
          <div className='bg-orange-50 rounded-full p-2'>
            <PiMathOperationsLight size='28px' />
          </div>
          <div className='flex flex-col'>
            <Typography color='primary' variant='h4' className='flex'>
              Basic Math
            </Typography>
            <Typography color='tertiary' variant='h5' className='flex'>
              12 Lessons
            </Typography>
          </div>
        </div>
        <div className='flex flex-row justify-between'>
          <div className='flex flex-col ml-6'>
            <Typography color='tertiary' variant='h4'>
              Rate
            </Typography>
            <Typography
              color='secondary'
              variant='h5'
              className='flex flex-row'
            >
              <IoIosStar size='18px' color='gold' />
              4.8
            </Typography>
          </div>
          <div className='flex flex-col mr-6 '>
            <Typography color='tertiary' variant='h4' className='flex'>
              Type
            </Typography>
            <Typography color='secondary' variant='h5' className='flex'>
              Mathematics
            </Typography>
          </div>
        </div>
      </div>
      <div className='bg-white rounded-3xl w-[30%] h-[128px] flex flex-col justify-around'>
        <div className='flex flex-row justify-start gap-4 ml-6'>
          <div className='bg-green-50 rounded-full p-2'>
            <PiMathOperationsLight size='28px' />
          </div>
          <div className='flex flex-col'>
            <Typography color='primary' variant='h4' className='flex'>
              Basic Math
            </Typography>
            <Typography color='tertiary' variant='h5' className='flex'>
              12 Lessons
            </Typography>
          </div>
        </div>
        <div className='flex flex-row justify-between'>
          <div className='flex flex-col ml-6'>
            <Typography color='tertiary' variant='h4'>
              Rate
            </Typography>
            <Typography
              color='secondary'
              variant='h5'
              className='flex flex-row'
            >
              <IoIosStar size='18px' color='gold' />
              4.8
            </Typography>
          </div>
          <div className='flex flex-col mr-6'>
            <Typography color='tertiary' variant='h4' className='flex'>
              Type
            </Typography>
            <Typography color='secondary' variant='h5' className='flex'>
              Mathematics
            </Typography>
          </div>
        </div>
      </div>
    </div>
  ),
];

export const BANNER_DELAY_MS = 5000;
