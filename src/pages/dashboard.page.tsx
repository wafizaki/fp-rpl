import * as React from 'react';
import Calendar from 'react-calendar';
import { FaClipboardList } from 'react-icons/fa';
import { FaRegBell } from 'react-icons/fa';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';
import { IoMdBook } from 'react-icons/io';
import { IoIosStar } from 'react-icons/io';
import { IoSettingsOutline } from 'react-icons/io5';
import { MdClass } from 'react-icons/md';
import { RiMessage2Fill } from 'react-icons/ri';
import { RxDashboard } from 'react-icons/rx';

import Banner from '@/components/Banner';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import Typography from '@/components/typography/Typography';

import { highlightToday } from '../lib/calendar-today';

export default function HomePage() {
  return (
    <Layout>
      <Seo templateTitle='Dashboard' />
      <main>
        <section className='bg-gray-100 relative flex min-h-screen flex-row items-center justify-between text-center'>
          <div className='bg-custom-ijo min-h-screen w-[15%] m-8 rounded-3xl flex flex-col justify-start sticky'>
            <Typography
              variant='j2'
              color='white'
              className='flex flex-start m-8'
            >
              <IoMdBook size='40px' className='mx-2' />
              TeachOur
            </Typography>
            <div className='flex flex-row items-center justify-start mx-8 my-2 rounded-full text-white p-4 hover:bg-custom-ijo_terang'>
              <RxDashboard size='28px' className='mx-2' />
              <Typography variant='h3' color='white'>
                Dashboard
              </Typography>
            </div>
            <div className='flex flex-row items-center justify-start mx-8 my-2 rounded-full text-white p-4 hover:bg-custom-ijo_terang'>
              <FaClipboardList size='28px' className='mx-2' />
              <Typography variant='h3' color='white'>
                My Courses
              </Typography>
            </div>
            <div className='flex flex-row items-center justify-start mx-8 my-2 rounded-full text-white p-4 hover:bg-custom-ijo_terang'>
              <MdClass size='28px' className='mx-2' />
              <Typography variant='h3' color='white'>
                My Assignments
              </Typography>
            </div>
            <div className='flex flex-row items-center justify-start mx-8 my-2 rounded-full p-4 text-white hover:bg-custom-ijo_terang'>
              <RiMessage2Fill
                size='28px'
                className='mx-2'
                color='hover:white'
              />
              <Typography variant='h3' color='white'>
                Messages
              </Typography>
            </div>
            <div className='flex flex-row items-center justify-start mx-8 my-2 rounded-full p-4 text-white hover:bg-custom-ijo_terang'>
              <FaRegBell size='28px' className='mx-2' color='hover:white' />
              <Typography variant='h3' color='white'>
                Notifications
              </Typography>
            </div>
            <div className='flex flex-row items-center justify-start mx-8 my-2 rounded-full p-4 text-white hover:bg-custom-ijo_terang'>
              <FaRegCalendarAlt
                size='28px'
                className='mx-2'
                color='hover:white'
              />
              <Typography variant='h3' color='white'>
                Calendars
              </Typography>
            </div>
            <div className='flex flex-row items-center justify-start mx-8 my-2 rounded-full p-4 text-white hover:bg-custom-ijo_terang'>
              <IoSettingsOutline
                size='28px'
                className='mx-2'
                color='hover:white'
              />
              <Typography variant='h3' color='white'>
                Settings
              </Typography>
            </div>
          </div>
          <div className='min-h-screen w-[50%] rounded-3xl flex flex-col justify-between'>
            <Typography
              color='tertiary'
              variant='j2'
              className='flex flex-start'
            >
              Welcome back Wafi!
            </Typography>
            <div className='h-[200px] rounded-3xl flex flex-col justify-between'>
              <div className='rounded-3xl h-[20%]'>
                <Typography
                  color='tertiary'
                  variant='h1'
                  className='flex flex-start'
                >
                  Want to Sell Offers!
                </Typography>
              </div>
              <div className='rounded-3xl h-[75%'>
                <Banner></Banner>
              </div>
            </div>
            <div className='h-[420px] rounded-3xl flex flex-row justify-around'>
              <div className='bg-white w-[45%] rounded-3xl flex flex-col justify-between'>
                <Typography color='tertiary' variant='h1' className='flex m-8'>
                  Recommended Videos
                </Typography>
                <div className='flex justify-center w-[80%] h-[80%] mx-auto'>
                  <iframe
                    width='545'
                    height='300'
                    src='https://www.youtube.com/embed/5NzfqW_Yt6Y?si=I1h2DKgSToEI6kVg'
                    title='YouTube video player'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                    referrerPolicy='strict-origin-when-cross-origin'
                    allowFullScreen
                    className='rounded-3xl'
                  ></iframe>
                </div>
              </div>
              <div className='bg-white w-[45%] rounded-3xl flex flex-col overflow-hidden hover:overflow-y-scroll'>
                <Typography variant='h1' color='tertiary' className='m-8 flex'>
                  Daily Schedule
                </Typography>
                <div className='flex flex-row gap-4 justify-between'>
                  <div className='flex flex-row m-8 gap-4'>
                    <div className='bg-blue-50 rounded-2xl p-4'>
                      <IoIosStar size='20px' />
                    </div>
                    <div className='flex flex-col'>
                      <Typography
                        variant='h4'
                        color='secondary'
                        className='flex '
                      >
                        Monday
                      </Typography>
                      <Typography
                        variant='h5'
                        color='tertiary'
                        className='flex '
                      >
                        All activities in Monday
                      </Typography>
                    </div>
                  </div>
                  <div className='flex items-center bg-gray-50 p-4 rounded-full m-8'>
                    <FaArrowRight size='20px' />
                  </div>
                </div>
                <div className='flex flex-row gap-4 justify-between'>
                  <div className='flex flex-row m-8 gap-4'>
                    <div className='bg-blue-50 rounded-2xl p-4'>
                      <IoIosStar size='20px' />
                    </div>
                    <div className='flex flex-col'>
                      <Typography
                        variant='h4'
                        color='secondary'
                        className='flex '
                      >
                        Monday
                      </Typography>
                      <Typography
                        variant='h5'
                        color='tertiary'
                        className='flex '
                      >
                        All activities in Monday
                      </Typography>
                    </div>
                  </div>
                  <div className='flex items-center bg-gray-50 p-4 rounded-full m-8'>
                    <FaArrowRight size='20px' />
                  </div>
                </div>
                <div className='flex flex-row gap-4 justify-between'>
                  <div className='flex flex-row m-8 gap-4'>
                    <div className='bg-blue-50 rounded-2xl p-4'>
                      <IoIosStar size='20px' />
                    </div>
                    <div className='flex flex-col'>
                      <Typography
                        variant='h4'
                        color='secondary'
                        className='flex '
                      >
                        Monday
                      </Typography>
                      <Typography
                        variant='h5'
                        color='tertiary'
                        className='flex '
                      >
                        All activities in Monday
                      </Typography>
                    </div>
                  </div>
                  <div className='flex items-center bg-gray-50 p-4 rounded-full m-8'>
                    <FaArrowRight size='20px' />
                  </div>
                </div>
                <div className='flex flex-row gap-4 justify-between'>
                  <div className='flex flex-row m-8 gap-4'>
                    <div className='bg-blue-50 rounded-2xl p-4'>
                      <IoIosStar size='20px' />
                    </div>
                    <div className='flex flex-col'>
                      <Typography
                        variant='h4'
                        color='secondary'
                        className='flex '
                      >
                        Monday
                      </Typography>
                      <Typography
                        variant='h5'
                        color='tertiary'
                        className='flex '
                      >
                        All activities in Monday
                      </Typography>
                    </div>
                  </div>
                  <div className='flex items-center bg-gray-50 p-4 rounded-full m-8'>
                    <FaArrowRight size='20px' />
                  </div>
                </div>
                <div className='flex flex-row gap-4 justify-between'>
                  <div className='flex flex-row m-8 gap-4'>
                    <div className='bg-blue-50 rounded-2xl p-4'>
                      <IoIosStar size='20px' />
                    </div>
                    <div className='flex flex-col'>
                      <Typography
                        variant='h4'
                        color='secondary'
                        className='flex '
                      >
                        Monday
                      </Typography>
                      <Typography
                        variant='h5'
                        color='tertiary'
                        className='flex '
                      >
                        All activities in Monday
                      </Typography>
                    </div>
                  </div>
                  <div className='flex items-center bg-gray-50 p-4 rounded-full m-8'>
                    <FaArrowRight size='20px' />
                  </div>
                </div>
                <div className='flex flex-row gap-4 justify-between'>
                  <div className='flex flex-row m-8 gap-4'>
                    <div className='bg-blue-50 rounded-2xl p-4'>
                      <IoIosStar size='20px' />
                    </div>
                    <div className='flex flex-col'>
                      <Typography
                        variant='h4'
                        color='secondary'
                        className='flex '
                      >
                        Monday
                      </Typography>
                      <Typography
                        variant='h5'
                        color='tertiary'
                        className='flex '
                      >
                        All activities in Monday
                      </Typography>
                    </div>
                  </div>
                  <div className='flex items-center bg-gray-50 p-4 rounded-full m-8'>
                    <FaArrowRight size='20px' />
                  </div>
                </div>
                <div className='flex flex-row gap-4 justify-between'>
                  <div className='flex flex-row m-8 gap-4'>
                    <div className='bg-blue-50 rounded-2xl p-4'>
                      <IoIosStar size='20px' />
                    </div>
                    <div className='flex flex-col'>
                      <Typography
                        variant='h4'
                        color='secondary'
                        className='flex '
                      >
                        Monday
                      </Typography>
                      <Typography
                        variant='h5'
                        color='tertiary'
                        className='flex '
                      >
                        All activities in Monday
                      </Typography>
                    </div>
                  </div>
                  <div className='flex items-center bg-gray-50 p-4 rounded-full m-8'>
                    <FaArrowRight size='20px' />
                  </div>
                </div>
              </div>
            </div>
            <div className='h-[200px] rounded-3xl justify-between flex flex-col'>
              <Typography
                variant='h1'
                color='tertiary'
                className='flex flex-start mb-4'
              >
                Class You're Taking
              </Typography>
              <div className='overflow-hidden hover:overflow-y-scroll'>
                <div className='bg-white m-4 ml-0 rounded-3xl flex flex-row gap-4 justify-between'>
                  <div className='flex flex-row m-8 gap-4'>
                    <div className='bg-blue-50 rounded-2xl p-4'>
                      <IoIosStar size='20px' />
                    </div>
                    <div className='flex flex-col'>
                      <Typography
                        variant='h4'
                        color='secondary'
                        className='flex '
                      >
                        Monday
                      </Typography>
                      <Typography
                        variant='h5'
                        color='tertiary'
                        className='flex '
                      >
                        All activities in Monday
                      </Typography>
                    </div>
                  </div>
                  <div className='flex items-center bg-gray-50 p-4 rounded-full m-8'>
                    <FaArrowRight size='20px' />
                  </div>
                </div>
                <div className='bg-white m-4 ml-0 rounded-3xl flex flex-row gap-4 justify-between'>
                  <div className='flex flex-row m-8 gap-4'>
                    <div className='bg-blue-50 rounded-2xl p-4'>
                      <IoIosStar size='20px' />
                    </div>
                    <div className='flex flex-col'>
                      <Typography
                        variant='h4'
                        color='secondary'
                        className='flex '
                      >
                        Monday
                      </Typography>
                      <Typography
                        variant='h5'
                        color='tertiary'
                        className='flex '
                      >
                        All activities in Monday
                      </Typography>
                    </div>
                  </div>
                  <div className='flex items-center bg-gray-50 p-4 rounded-full m-8'>
                    <FaArrowRight size='20px' />
                  </div>
                </div>
                <div className='bg-white m-4 ml-0 rounded-3xl flex flex-row gap-4 justify-between'>
                  <div className='flex flex-row m-8 gap-4'>
                    <div className='bg-blue-50 rounded-2xl p-4'>
                      <IoIosStar size='20px' />
                    </div>
                    <div className='flex flex-col'>
                      <Typography
                        variant='h4'
                        color='secondary'
                        className='flex '
                      >
                        Monday
                      </Typography>
                      <Typography
                        variant='h5'
                        color='tertiary'
                        className='flex '
                      >
                        All activities in Monday
                      </Typography>
                    </div>
                  </div>
                  <div className='flex items-center bg-gray-50 p-4 rounded-full m-8'>
                    <FaArrowRight size='20px' />
                  </div>
                </div>
                <div className='bg-white m-4 ml-0 rounded-3xl flex flex-row gap-4 justify-between'>
                  <div className='flex flex-row m-8 gap-4'>
                    <div className='bg-blue-50 rounded-2xl p-4'>
                      <IoIosStar size='20px' />
                    </div>
                    <div className='flex flex-col'>
                      <Typography
                        variant='h4'
                        color='secondary'
                        className='flex '
                      >
                        Monday
                      </Typography>
                      <Typography
                        variant='h5'
                        color='tertiary'
                        className='flex '
                      >
                        All activities in Monday
                      </Typography>
                    </div>
                  </div>
                  <div className='flex items-center bg-gray-50 p-4 rounded-full m-8'>
                    <FaArrowRight size='20px' />
                  </div>
                </div>
                <div className='bg-white m-4 ml-0 rounded-3xl flex flex-row gap-4 justify-between'>
                  <div className='flex flex-row m-8 gap-4'>
                    <div className='bg-blue-50 rounded-2xl p-4'>
                      <IoIosStar size='20px' />
                    </div>
                    <div className='flex flex-col'>
                      <Typography
                        variant='h4'
                        color='secondary'
                        className='flex '
                      >
                        Monday
                      </Typography>
                      <Typography
                        variant='h5'
                        color='tertiary'
                        className='flex '
                      >
                        All activities in Monday
                      </Typography>
                    </div>
                  </div>
                  <div className='flex items-center bg-gray-50 p-4 rounded-full m-8'>
                    <FaArrowRight size='20px' />
                  </div>
                </div>
                <div className='bg-white m-4 ml-0 rounded-3xl flex flex-row gap-4 justify-between'>
                  <div className='flex flex-row m-8 gap-4'>
                    <div className='bg-blue-50 rounded-2xl p-4'>
                      <IoIosStar size='20px' />
                    </div>
                    <div className='flex flex-col'>
                      <Typography
                        variant='h4'
                        color='secondary'
                        className='flex '
                      >
                        Monday
                      </Typography>
                      <Typography
                        variant='h5'
                        color='tertiary'
                        className='flex '
                      >
                        All activities in Monday
                      </Typography>
                    </div>
                  </div>
                  <div className='flex items-center bg-gray-50 p-4 rounded-full m-8'>
                    <FaArrowRight size='20px' />
                  </div>
                </div>
                <div className='bg-white m-4 ml-0 rounded-3xl flex flex-row gap-4 justify-between'>
                  <div className='flex flex-row m-8 gap-4'>
                    <div className='bg-blue-50 rounded-2xl p-4'>
                      <IoIosStar size='20px' />
                    </div>
                    <div className='flex flex-col'>
                      <Typography
                        variant='h4'
                        color='secondary'
                        className='flex '
                      >
                        Monday
                      </Typography>
                      <Typography
                        variant='h5'
                        color='tertiary'
                        className='flex '
                      >
                        All activities in Monday
                      </Typography>
                    </div>
                  </div>
                  <div className='flex items-center bg-gray-50 p-4 rounded-full m-8'>
                    <FaArrowRight size='20px' />
                  </div>
                </div>
                <div className='bg-white m-4 ml-0 rounded-3xl flex flex-row gap-4 justify-between'>
                  <div className='flex flex-row m-8 gap-4'>
                    <div className='bg-blue-50 rounded-2xl p-4'>
                      <IoIosStar size='20px' />
                    </div>
                    <div className='flex flex-col'>
                      <Typography
                        variant='h4'
                        color='secondary'
                        className='flex '
                      >
                        Monday
                      </Typography>
                      <Typography
                        variant='h5'
                        color='tertiary'
                        className='flex '
                      >
                        All activities in Monday
                      </Typography>
                    </div>
                  </div>
                  <div className='flex items-center bg-gray-50 p-4 rounded-full m-8'>
                    <FaArrowRight size='20px' />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='min-h-screen w-[25%] ounded-3xl flex flex-col justify-between'>
            <div className='bg-custom-ijo py-4 flex justify-center flex-col rounded-3xl shadow-md'>
              <Calendar
                tileClassName={highlightToday}
                prev2Label={null}
                next2Label={null}
              />
            </div>
            <div className='h-[640px] rounded-3xl flex flex-col'>
              <Typography
                className='justify-start flex mb-4'
                variant='j2'
                color='tertiary'
              >
                Assignments
              </Typography>
              <div className='overflow-hidden hover:overflow-y-scroll '>
                <div className='bg-white rounded-3xl flex flex-row gap-4 m-4 ml-0 justify-between'>
                  <div className='flex flex-row m-8 gap-4'>
                    <div className='bg-blue-50 rounded-2xl p-4'>
                      <IoIosStar size='20px' />
                    </div>
                    <div className='flex flex-col'>
                      <Typography
                        variant='h4'
                        color='secondary'
                        className='flex '
                      >
                        Monday
                      </Typography>
                      <Typography
                        variant='h5'
                        color='tertiary'
                        className='flex '
                      >
                        All activities in Monday
                      </Typography>
                    </div>
                  </div>
                  <div className='flex items-center bg-gray-50 p-4 rounded-full m-8'>
                    <FaArrowRight size='20px' />
                  </div>
                </div>
                <div className='bg-white rounded-3xl flex flex-row gap-4 m-4 ml-0 justify-between'>
                  <div className='flex flex-row m-8 gap-4'>
                    <div className='bg-blue-50 rounded-2xl p-4'>
                      <IoIosStar size='20px' />
                    </div>
                    <div className='flex flex-col'>
                      <Typography
                        variant='h4'
                        color='secondary'
                        className='flex '
                      >
                        Monday
                      </Typography>
                      <Typography
                        variant='h5'
                        color='tertiary'
                        className='flex '
                      >
                        All activities in Monday
                      </Typography>
                    </div>
                  </div>
                  <div className='flex items-center bg-gray-50 p-4 rounded-full m-8'>
                    <FaArrowRight size='20px' />
                  </div>
                </div>
                <div className='bg-white rounded-3xl flex flex-row gap-4 m-4 ml-0 justify-between'>
                  <div className='flex flex-row m-8 gap-4'>
                    <div className='bg-blue-50 rounded-2xl p-4'>
                      <IoIosStar size='20px' />
                    </div>
                    <div className='flex flex-col'>
                      <Typography
                        variant='h4'
                        color='secondary'
                        className='flex '
                      >
                        Monday
                      </Typography>
                      <Typography
                        variant='h5'
                        color='tertiary'
                        className='flex '
                      >
                        All activities in Monday
                      </Typography>
                    </div>
                  </div>
                  <div className='flex items-center bg-gray-50 p-4 rounded-full m-8'>
                    <FaArrowRight size='20px' />
                  </div>
                </div>
                <div className='bg-white rounded-3xl flex flex-row gap-4 m-4 ml-0 justify-between'>
                  <div className='flex flex-row m-8 gap-4'>
                    <div className='bg-blue-50 rounded-2xl p-4'>
                      <IoIosStar size='20px' />
                    </div>
                    <div className='flex flex-col'>
                      <Typography
                        variant='h4'
                        color='secondary'
                        className='flex '
                      >
                        Monday
                      </Typography>
                      <Typography
                        variant='h5'
                        color='tertiary'
                        className='flex '
                      >
                        All activities in Monday
                      </Typography>
                    </div>
                  </div>
                  <div className='flex items-center bg-gray-50 p-4 rounded-full m-8'>
                    <FaArrowRight size='20px' />
                  </div>
                </div>
                <div className='bg-white rounded-3xl flex flex-row gap-4 m-4 ml-0 justify-between'>
                  <div className='flex flex-row m-8 gap-4'>
                    <div className='bg-blue-50 rounded-2xl p-4'>
                      <IoIosStar size='20px' />
                    </div>
                    <div className='flex flex-col'>
                      <Typography
                        variant='h4'
                        color='secondary'
                        className='flex '
                      >
                        Monday
                      </Typography>
                      <Typography
                        variant='h5'
                        color='tertiary'
                        className='flex '
                      >
                        All activities in Monday
                      </Typography>
                    </div>
                  </div>
                  <div className='flex items-center bg-gray-50 p-4 rounded-full m-8'>
                    <FaArrowRight size='20px' />
                  </div>
                </div>
                <div className='bg-white rounded-3xl flex flex-row gap-4 m-4 ml-0 justify-between'>
                  <div className='flex flex-row m-8 gap-4'>
                    <div className='bg-blue-50 rounded-2xl p-4'>
                      <IoIosStar size='20px' />
                    </div>
                    <div className='flex flex-col'>
                      <Typography
                        variant='h4'
                        color='secondary'
                        className='flex '
                      >
                        Monday
                      </Typography>
                      <Typography
                        variant='h5'
                        color='tertiary'
                        className='flex '
                      >
                        All activities in Monday
                      </Typography>
                    </div>
                  </div>
                  <div className='flex items-center bg-gray-50 p-4 rounded-full m-8'>
                    <FaArrowRight size='20px' />
                  </div>
                </div>
                <div className='bg-white rounded-3xl flex flex-row gap-4 m-4 ml-0 justify-between'>
                  <div className='flex flex-row m-8 gap-4'>
                    <div className='bg-blue-50 rounded-2xl p-4'>
                      <IoIosStar size='20px' />
                    </div>
                    <div className='flex flex-col'>
                      <Typography
                        variant='h4'
                        color='secondary'
                        className='flex '
                      >
                        Monday
                      </Typography>
                      <Typography
                        variant='h5'
                        color='tertiary'
                        className='flex '
                      >
                        All activities in Monday
                      </Typography>
                    </div>
                  </div>
                  <div className='flex items-center bg-gray-50 p-4 rounded-full m-8'>
                    <FaArrowRight size='20px' />
                  </div>
                </div>
                <div className='bg-white rounded-3xl flex flex-row gap-4 m-4 ml-0 justify-between'>
                  <div className='flex flex-row m-8 gap-4'>
                    <div className='bg-blue-50 rounded-2xl p-4'>
                      <IoIosStar size='20px' />
                    </div>
                    <div className='flex flex-col'>
                      <Typography
                        variant='h4'
                        color='secondary'
                        className='flex '
                      >
                        Monday
                      </Typography>
                      <Typography
                        variant='h5'
                        color='tertiary'
                        className='flex '
                      >
                        All activities in Monday
                      </Typography>
                    </div>
                  </div>
                  <div className='flex items-center bg-gray-50 p-4 rounded-full m-8'>
                    <FaArrowRight size='20px' />
                  </div>
                </div>
                <div className='bg-white rounded-3xl flex flex-row gap-4 m-4 ml-0 justify-between'>
                  <div className='flex flex-row m-8 gap-4'>
                    <div className='bg-blue-50 rounded-2xl p-4'>
                      <IoIosStar size='20px' />
                    </div>
                    <div className='flex flex-col'>
                      <Typography
                        variant='h4'
                        color='secondary'
                        className='flex '
                      >
                        Monday
                      </Typography>
                      <Typography
                        variant='h5'
                        color='tertiary'
                        className='flex '
                      >
                        All activities in Monday
                      </Typography>
                    </div>
                  </div>
                  <div className='flex items-center bg-gray-50 p-4 rounded-full m-8'>
                    <FaArrowRight size='20px' />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer className='absolute bottom-0 text-gray-700 justify-center w-full'>
            © {new Date().getFullYear()} By Team 3 RPL
          </footer>
        </section>
      </main>
    </Layout>
  );
}
