import React, {useState,useEffect,useRef } from "react";
import Chart from 'chart.js/auto';
import {AiOutlinePieChart,AiOutlineLike} from "react-icons/ai";
import {BsTags} from "react-icons/bs";
import {MdSchedule} from "react-icons/md";
import {BiUserCircle} from "react-icons/bi";
import {IoSettingsOutline, IoMenu} from "react-icons/io5";
import {CiSearch} from "react-icons/ci";
import {GrNotification} from "react-icons/gr";
import {CgProfile} from "react-icons/cg";
import {CiMoneyBill} from "react-icons/ci";
import {RiGroupLine} from "react-icons/ri";
import {Link} from "react-router-dom";

const Dashboard = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const chartRef = useRef(null);
  const pieChartRef = useRef(null);
  const chartInstanceRef = useRef(null);
  const pieChartInstanceRef = useRef(null);

    const toggleMobileMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    useEffect(() => {
        const chartCanvas = chartRef.current.getContext('2d');
        const pieChartCanvas = pieChartRef.current.getContext('2d');

        
        if (chartInstanceRef.current) {
          chartInstanceRef.current.destroy();
        }
        if (pieChartInstanceRef.current) {
            pieChartInstanceRef.current.destroy();
          }
        
    
        
        chartInstanceRef.current = new Chart(chartCanvas, {
            type: 'line',
            data: {
              labels: ['0','Week 1', 'Week 2', 'Week 3', 'Week 4'],
              datasets: [
                {
                  label: 'Guests',
                  borderColor: '#E9A0A0',
                  borderWidth: 1,
                  data: [120, 180, 150, 200, 130 ],
                },
                {
                  label: 'Users',
                  borderColor: '#9BDD7C',
                  borderWidth: 1,
                  data: [200, 150, 170, 140, 190 ],
                },
              ],
            },
            options: {
              scales: {
                x: {
                  type: 'category',
                },
              },
              plugins: {
                title: {
                  display: true,
                  text: 'Activities', 
                  position: 'top',
                  align: 'start',
                  font: {
                    size: 16,
                    weight: 'bold',
                  },
                },
                subtitle: {
                  display: true,
                  text: 'May-June 2021',
                  position: 'top',
                  align: 'start',
                  font: {
                    size: 13,
                    weight: 'normal',
                    style: 'lato',
                  },
                  
                },
                legend: {
                    display: true,
                    position: 'top',
                    align: 'end',
                    labels: {
                      usePointStyle: true,
                      padding: 20,
                    },
                },
              },
            },
          });
        
        pieChartInstanceRef.current = new Chart(pieChartCanvas, {
            type: 'pie',
            data: {
              labels: ['Basic Tees', 'Custom Short Pants', 'Super Hoodies'],
              boxWidth:4,
              padding:5,

              datasets: [
                {
                  data: [14, 31, 55],
                  backgroundColor: ['#EE8484', '#F6DC7D', '#98D89E'], 
                },
              ],
            },
            options: {
                plugins: {
                  legend: {
                    display: true,
                    position: 'right',
                    labels: {
                      boxWidth: 8, 
                      boxHeight:8,
                      padding:10,
                      font: {
                        weight: 'bold', 
                      },
                    },
                  },
                },
              responsive: true,
            maintainAspectRatio: false,
             aspectRatio: 3,
            },
            
          });
        },
        []);


    return (
      <div >
      <div className="md:flex">
      
        <div className="bg-black w-1/5 f-screen rounded-3xl m-5 ml-7 hidden md:block ">
          <div className="container text-white p-10">
            <h1 className="font-montserrat font-bold text-3xl leading-10 tracking-normal">Board.</h1>
            <ul className=" mt-10 p-2 space-y-7">
                <button><div className="flex">
              <AiOutlinePieChart size={23}/><li className="mb-2 pl-4 font-bold font-montserrat ">Dashboard</li></div></button>
              <button><div className="flex" ><BsTags size={23}/><li className="mb-2 pl-4 font-sm font-montserrat text-slate-300">Transactions</li></div></button>
              <button className="flex"><MdSchedule size={23} /><li className="mb-2 pl-4 font-sm font-montserrat text-slate-300">Schedules</li></button>
              <button className="flex"><BiUserCircle size={23}/><li className="mb-2 pl-4 font-sm font-montserrat text-slate-300">Users</li></button>
              <button className="flex"><IoSettingsOutline size={23}/><li className="mb-2 pl-4 font-sm font-montserrat text-slate-300">Settings</li></button>
            </ul>
            <button><ul className="flex-col justify-end mt-72 space-y-3 text-slate-300 text-xs font-montserrat tracking-widest text-start">
                <li >Help</li>
                <li>Contact Us</li>
            </ul></button>
          </div>
        </div>
        
        <div className="  md:w-full md:flex md:space-x-20">
        <div className="  w-full text-center  md:hidden  ">
            <h1 className="font-montserrat font-bold text-3xl leading-10 tracking-normal  ">Board.</h1>
        </div>
          <div className=" flex-col md:hidden">
            <button
              className=" p-5"
              onClick={toggleMobileMenu}
            >
              <IoMenu size={30}/>
            </button>
            {isMobileMenuOpen && (
            <div className="flex-col md:hidden bg-black p-9">
              <ul className="text-white">
              <button className="flex"><AiOutlinePieChart size={23}/><li className="mb-2 pl-4 font-bold font-montserrat ">Dashboard</li></button>
              <button className="flex" ><BsTags size={23}/><li className="mb-2 pl-4 font-sm font-montserrat text-slate-300 ">Transactions</li></button>
              <button className="flex"><MdSchedule size={23} /><li className="mb-2 pl-4 font-sm font-montserrat text-slate-300">Schedules</li></button>
              <button className="flex"><BiUserCircle size={23}/><li className="mb-2 pl-4 font-sm font-montserrat text-slate-300">Users</li></button>
              <button className="flex"><IoSettingsOutline size={23}/><li className="mb-2 pl-4 font-sm font-montserrat text-slate-300">Settings</li></button>
              </ul>
            </div>
          )}
          
          </div>
          
        <div className="w-full bg-inherit">
        
        <nav className="container mx-auto md:flex items-center text-center justify-between py-4 px-6">
          <div className="font-montserrat font-bold text-2xl leading-10 tracking-normal">Dashboard</div>
          <div className="flex items-center space-x-4">
            <div className="flex">
            <input
              type="text"
              placeholder="Search"
              className="h-9 w-48 px-2 py-2 border-none rounded-xl border-gray-300  focus:outline-none focus:border-black"
              
            />
            <button><CiSearch size={23} /></button>
            </div>
            <button className="text-gray-600 focus:outline-none">
            <GrNotification size={27} className="m-2"/>
            </button>
            <Link to={'/'}><button><CgProfile size={27} className="m-2"/></button></Link>
          </div>
        </nav>
        <div className="container my-none mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 p-4 md:p-10">
          <div className="bg-green-100 p-4 rounded-2xl ">
            <CiMoneyBill size={30} className="md:ml-48"/>
            <h3 className="font-lato font-semibold text-xs">Total Revenues</h3>
            <h2 className="font-opensans font-bold text-lg">$2,129,430</h2>
            </div>
          <div className="bg-lime-50 p-4 rounded-2xl">
            <BsTags size={27} className="md:ml-48"/>
            <h3 className="font-lato font-semibold text-xs">Total Transactions</h3>
            <h2 className="font-opensans font-bold text-lg">1,520</h2>
            </div>
          <div className="bg-red-100 p-4 rounded-2xl">
            <AiOutlineLike size={27} className="md:ml-48"/>
            <h3 className="font-lato font-semibold text-xs">Total Likes</h3>
            <h2 className="font-opensans font-bold text-lg">9,721</h2>
            </div>
          <div className="bg-indigo-50 p-4 rounded-2xl">
            <RiGroupLine size={27} className="md:ml-48"/>
            <h3 className="font-lato font-semibold text-xs">Total Users</h3>
            <h2 className="font-opensans font-bold text-lg">892</h2>
            </div>
        </div>
        <div className="container  h-80  p-4 md:p-2 md:mt-none ">
        <canvas ref={chartRef}></canvas>
      </div>
        <div className="container p-4 gap-y-10 grid grid-cols-1 md:grid-cols-2 gap-x-96  md:p-10">
        <div className="bg-white p-4 rounded-2xl ">
            <h2 className="font-montserrat font-bold text-lg">Top Products</h2>
            <div className="container mx-auto p-4" >
            <canvas ref={pieChartRef}></canvas>
            </div>
        </div>
        <div className="bg-white p-4 rounded-2xl ">
        <div className="flex">
        <h2 className="font-montserrat font-bold text-lg p-2">Today's Schedule</h2>
        <button className="font-montserrat font-light text-slate-600 p-3 text-sm ml-20">See All </button>
        </div>
        <button className="flex space-x-5 mb-3 text-start">
            <span className="w-1 h-14 bg-green-500"></span>
            <div className="text-xs">
                <p className="font-lato font-medium text-slate-600">Meeting with suppliers from Kuta Bali</p>
                <p className="font-lato font-light text-slate-600">14.00-15.00</p>
                <p className="font-lato font-light text-slate-600">at Sunset Road, Kuta, Bali </p>
            </div>
        </button>
        <button className="flex space-x-5 text-start">
            <span className="w-1 h-14 bg-purple-700"></span>
            <div className="text-xs">
                <p className="font-lato font-medium text-slate-600">Check operation at Giga Factory 1</p>
                <p className="font-lato font-light text-slate-600">18.00-20.00</p>
                <p className="font-lato font-light text-slate-600">at Central Jakarta  </p>
            </div>
        </button>
        </div>

        </div>
        
          </div>
        </div> 
          
          
        
        
      
      </div>
      </div>
    );
  };

 export default Dashboard;