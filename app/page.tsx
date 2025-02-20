'use client';

import { useState } from 'react';
import { Search, Filter, ChevronDown, Download, MoreHorizontal, Clock, AlertCircle, User, Power } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Employee {
  id: number;
  name: string;
  role: string;
  department: string;
  avatar: string;
  summary: {
    calculated: {
      present: number;
      absent: number;
      wo: number;
      bonus: string;
      ot: string;
      lt: string;
      otLt: string;
      finalAtt: number;
      finalizedBy: string;
    };
    final: {
      present: number;
      absent: number;
      wo: number;
      bonus: string;
      ot: string;
      lt: string;
      otLt: string;
      finalAtt: number;
      lockedBy: string;
    };
  };
}

interface AttendanceEntry {
  date: string;
  day: string;
  timePlanned: string;
  actualTime: string;
  fineBonus: {
    current: string;
    previous: string;
  };
  error: boolean;
  calAtt: string;
  finalAtt: string;
}

const employees: Employee[] = [
  {
    id: 1,
    name: 'Vasu Parashar',
    role: 'Sales Manager',
    department: 'Sales Dept.',
    avatar: '/avatar1.JPG',
    summary: {
      calculated: {
        present: 17.5,
        absent: 2.5,
        wo: 11,
        bonus: '+2000',
        ot: '17:32 H',
        lt: '-12:00 H',
        otLt: '05:32 H',
        finalAtt: 20,
        finalizedBy: 'Rahul'
      },
      final: {
        present: 23.5,
        absent: 3.5,
        wo: 4,
        bonus: '+400',
        ot: '12:30 H',
        lt: '-19:00',
        otLt: '-06:30 H',
        finalAtt: 27,
        lockedBy: 'Shriniwas'
      }
    }
  },
 
  {
    id: 2,
    name: 'Vasu Parashar',
    role: 'Sales Manager',
    department: 'Sales Dept.',
    avatar: '/avatar1.JPG',
    summary: {
      calculated: {
        present: 17.5,
        absent: 2.5,
        wo: 11,
        bonus: '+3000',
        ot: '12:35 H',
        lt: '-11:00 H',
        otLt: '04:32 H',
        finalAtt: 20,
        finalizedBy: 'Gopal'
      },
      final: {
        present: 45.8,
        absent: 3.5,
        wo: 4,
        bonus: '+400',
        ot: '12:30 H',
        lt: '-19:00',
        otLt: '-06:30 H',
        finalAtt: 27,
        lockedBy: 'Rohan Bhaiya'
      }
    }
  },
  {
    id: 3,
    name: 'Vasu Parashar',
    role: 'Sales Manager',
    department: 'Sales Dept.',
    avatar: '/avatar1.JPG',
    summary: {
      calculated: {
        present: 17.5,
        absent: 2.5,
        wo: 11,
        bonus: '+2000',
        ot: '17:32 H',
        lt: '-12:00 H',
        otLt: '05:32 H',
        finalAtt: 20,
        finalizedBy: 'Rahul'
      },
      final: {
        present: 23.5,
        absent: 3.5,
        wo: 4,
        bonus: '+400',
        ot: '12:30 H',
        lt: '-19:00',
        otLt: '-06:30 H',
        finalAtt: 27,
        lockedBy: 'Shriniwas'
      }
    }
  },
  {
    id: 4,
    name: 'Vasu Parashar',
    role: 'Sales Manager',
    department: 'Sales Dept.',
    avatar: '/avatar1.JPG',
    summary: {
      calculated: {
        present: 17.5,
        absent: 2.5,
        wo: 11,
        bonus: '+2000',
        ot: '17:32 H',
        lt: '-12:00 H',
        otLt: '05:32 H',
        finalAtt: 20,
        finalizedBy: 'Rahul'
      },
      final: {
        present: 23.5,
        absent: 3.5,
        wo: 4,
        bonus: '+400',
        ot: '12:30 H',
        lt: '-19:00',
        otLt: '-06:30 H',
        finalAtt: 27,
        lockedBy: 'Shriniwas'
      }
    }
  },
  {
    id: 5,
    name: 'Vasu Parashar',
    role: 'Sales Manager',
    department: 'Sales Dept.',
    avatar: '/avatar1.JPG',
    summary: {
      calculated: {
        present: 17.5,
        absent: 2.5,
        wo: 11,
        bonus: '+2000',
        ot: '17:32 H',
        lt: '-12:00 H',
        otLt: '05:32 H',
        finalAtt: 20,
        finalizedBy: 'Rahul'
      },
      final: {
        present: 23.5,
        absent: 3.5,
        wo: 4,
        bonus: '+400',
        ot: '12:30 H',
        lt: '-19:00',
        otLt: '-06:30 H',
        finalAtt: 27,
        lockedBy: 'Shriniwas'
      }
    }
  },
  {
    id: 6,
    name: 'Vasu Parashar',
    role: 'Sales Manager',
    department: 'Sales Dept.',
    avatar: '/avatar1.JPG',
    summary: {
      calculated: {
        present: 17.5,
        absent: 2.5,
        wo: 11,
        bonus: '+2000',
        ot: '17:32 H',
        lt: '-12:00 H',
        otLt: '05:32 H',
        finalAtt: 20,
        finalizedBy: 'Rahul'
      },
      final: {
        present: 23.5,
        absent: 3.5,
        wo: 4,
        bonus: '+400',
        ot: '12:30 H',
        lt: '-19:00',
        otLt: '-06:30 H',
        finalAtt: 27,
        lockedBy: 'Shriniwas'
      }
    }
  },
  {
    id: 7,
    name: 'Vasu Parashar',
    role: 'Sales Manager',
    department: 'Sales Dept.',
    avatar: '/avatar1.JPG',
    summary: {
      calculated: {
        present: 17.5,
        absent: 2.5,
        wo: 11,
        bonus: '+2000',
        ot: '17:32 H',
        lt: '-12:00 H',
        otLt: '05:32 H',
        finalAtt: 20,
        finalizedBy: 'Rahul'
      },
      final: {
        present: 23.5,
        absent: 3.5,
        wo: 4,
        bonus: '+400',
        ot: '12:30 H',
        lt: '-19:00',
        otLt: '-06:30 H',
        finalAtt: 27,
        lockedBy: 'Shriniwas'
      }
    }
  },
  {
    id: 8,
    name: 'Vasu Parashar',
    role: 'Sales Manager',
    department: 'Sales Dept.',
    avatar: '/avatar1.JPG',
    summary: {
      calculated: {
        present: 17.5,
        absent: 2.5,
        wo: 11,
        bonus: '+2000',
        ot: '17:32 H',
        lt: '-12:00 H',
        otLt: '05:32 H',
        finalAtt: 20,
        finalizedBy: 'Rahul'
      },
      final: {
        present: 23.5,
        absent: 3.5,
        wo: 4,
        bonus: '+400',
        ot: '12:30 H',
        lt: '-19:00',
        otLt: '-06:30 H',
        finalAtt: 27,
        lockedBy: 'Shriniwas'
      }
    }
  },
  {
    id: 9,
    name: 'Vasu Parashar',
    role: 'Sales Manager',
    department: 'Sales Dept.',
    avatar: '/avatar1.JPG',
    summary: {
      calculated: {
        present: 17.5,
        absent: 2.5,
        wo: 11,
        bonus: '+2000',
        ot: '17:32 H',
        lt: '-12:00 H',
        otLt: '05:32 H',
        finalAtt: 20,
        finalizedBy: 'Rahul'
      },
      final: {
        present: 23.5,
        absent: 3.5,
        wo: 4,
        bonus: '+400',
        ot: '12:30 H',
        lt: '-19:00',
        otLt: '-06:30 H',
        finalAtt: 27,
        lockedBy: 'Shriniwas'
      }
    }
  }
];

const attendanceData: AttendanceEntry[] = [
  {
    date: '31-Jun-2025',
    day: 'M',
    timePlanned: '09:00 AM - 06:30 PM @ 09:00 H',
    actualTime: '09:00 AM - 06:32 PM @ 09:01 H',
    fineBonus: { current: '+500', previous: '+900' },
    error: true,
    calAtt: 'P',
    finalAtt: 'P'
  },
];

export default function Home() {
  const [selectedMonth, setSelectedMonth] = useState('July');
  const [selectedEmployee, setSelectedEmployee] = useState<Employee>(employees[0]);

  return (
    <main className="min-h-screen bg-[#F4F7FE]">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full w-16 bg-[#4318FF] flex flex-col items-center py-4 text-white z-20">
        <div className="mb-8 text-2xl font-bold">P</div>
        <div className="w-10 h-10 rounded-full overflow-hidden mb-8">
          <img src={selectedEmployee.avatar} alt="Profile" className="w-full h-full object-cover" />
        </div>
        <nav className="flex flex-col gap-6 flex-1">
  
  

  <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
    <img
      src="/Navigation-Icons.png"
      alt="Icon 3"
      className="w-6 h-6 object-contain"
    />
  </button>
  

  <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
    <img
      src="/Navigation-Icons (1).png"
      alt="Icon 1"
      className="w-6 h-6 object-contain"
    />
  </button>

  <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
    <img
      src="/Navigation-Icons (2).png"
      alt="Icon 2"
      className="w-6 h-6 object-contain"
    />
  </button>

 
  
</nav>
        <button className="p-2 hover:bg-white/10 rounded-lg transition-colors mt-auto mb-4">
          <Power size={20} />
        </button>
      </div>

      {/* Main Content */}
      <div className="pl-16 flex">
        {/* Employee Selection Sidebar */}
        <div className="w-72 h-screen overflow-y-auto bg-white border-r">
          <div className="p-4 space-y-2">
            {employees.map((employee) => (
              <button
                key={employee.id}
                onClick={() => setSelectedEmployee(employee)}
                className={cn(
                  "w-full text-left p-4 rounded-xl transition-colors",
                  selectedEmployee.id === employee.id ? "bg-[#F4F7FE]" : "hover:bg-gray-50"
                )}
              >
                <div className="flex items-center gap-4">
                  <img
                    src={employee.avatar}
                    alt={employee.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">{employee.name}</h3>
                    <p className="text-sm text-gray-500">
                      {employee.role} · {employee.department}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1">
          {/* Header */}
          <header className="bg-white border-b sticky top-0 z-10">
            <div className="flex items-center justify-between px-6">
              <div className="flex items-center gap-8">
                <button className="py-4 px-2 border-b-2 border-[#4318FF] text-[#4318FF] font-medium">
                  Atten. Team (Admin)
                </button>
                <button className="py-4 px-2 text-gray-600 hover:text-gray-900">Org. Details (Admin)</button>
                <button className="py-4 px-2 text-gray-600 hover:text-gray-900">In/Out Logs</button>
                <button className="py-4 px-2 text-gray-600 hover:text-gray-900">Finalize Atten.</button>
                <button className="py-4 px-2 text-gray-600 hover:text-gray-900">Manage Employees</button>
                <button className="py-4 px-2 text-[#4318FF] font-medium">Final Reports</button>
                <button className="py-4 px-2 text-gray-600 hover:text-gray-900">Error Reports</button>
              </div>
              <div className="text-[#4318FF] font-medium">
                Attendance Module
              </div>
            </div>
          </header>

          {/* Controls */}
          <div className="p-6 bg-white border-b">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="Search"
                    className="pl-10 pr-4 py-2 w-64 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#4318FF] focus:border-transparent"
                  />
                </div>
                <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <Filter size={20} className="text-gray-500" />
                  <span className="text-gray-700">Filters</span>
                </button>
                <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <span className="text-gray-700">Rows</span>
                  <ChevronDown size={16} className="text-gray-500" />
                </button>
                <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <span className="text-gray-700">{selectedMonth}</span>
                  <ChevronDown size={16} className="text-gray-500" />
                </button>
              </div>
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-2 px-4 py-2 bg-[#4318FF] text-white rounded-lg hover:bg-[#3311CC] transition-colors">
                  <Download size={20} />
                  Export
                </button>
                <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <span className="text-gray-700">Detailed View</span>
                  <ChevronDown size={16} className="text-gray-500" />
                </button>
              </div>
            </div>
          </div>

          {selectedEmployee && (
            <div className="p-6">
              {/* Employee Summary */}
              <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={selectedEmployee.avatar}
                    alt={selectedEmployee.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">{selectedEmployee.name}</h3>
                    <p className="text-sm text-gray-500">
                      {selectedEmployee.role} · {selectedEmployee.department}
                    </p>
                  </div>
                </div>

                {/* Summary Table */}
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="text-left border-b">
                        <th></th>
                        <th className="px-4 py-3 text-sm font-medium text-gray-600">P</th>
                        <th className="px-4 py-3 text-sm font-medium text-gray-600">A</th>
                        <th className="px-4 py-3 text-sm font-medium text-gray-600">WO</th>
                        <th className="px-4 py-3 text-sm font-medium text-gray-600">Σ Bonus/Fine</th>
                        <th className="px-4 py-3 text-sm font-medium text-gray-600">OT</th>
                        <th className="px-4 py-3 text-sm font-medium text-gray-600">LT</th>
                        <th className="px-4 py-3 text-sm font-medium text-gray-600">OT+LT</th>
                        <th className="px-4 py-3 text-sm font-medium text-gray-600">Final Att.</th>
                        <th className="px-4 py-3"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="px-4 py-3 font-medium text-gray-900">Cal.</td>
                        <td className="px-4 py-3">{selectedEmployee.summary.calculated.present}</td>
                        <td className="px-4 py-3">{selectedEmployee.summary.calculated.absent}</td>
                        <td className="px-4 py-3">{selectedEmployee.summary.calculated.wo}</td>
                        <td className="px-4 py-3 text-green-500 font-medium">{selectedEmployee.summary.calculated.bonus}</td>
                        <td className="px-4 py-3">{selectedEmployee.summary.calculated.ot}</td>
                        <td className="px-4 py-3 text-red-500">{selectedEmployee.summary.calculated.lt}</td>
                        <td className="px-4 py-3">{selectedEmployee.summary.calculated.otLt}</td>
                        <td className="px-4 py-3">{selectedEmployee.summary.calculated.finalAtt}</td>
                        <td className="px-4 py-3 text-gray-500">Finalised by {selectedEmployee.summary.calculated.finalizedBy}</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-gray-900">Final</td>
                        <td className="px-4 py-3">{selectedEmployee.summary.final.present}</td>
                        <td className="px-4 py-3">{selectedEmployee.summary.final.absent}</td>
                        <td className="px-4 py-3">{selectedEmployee.summary.final.wo}</td>
                        <td className="px-4 py-3 text-green-500 font-medium">{selectedEmployee.summary.final.bonus}</td>
                        <td className="px-4 py-3">{selectedEmployee.summary.final.ot}</td>
                        <td className="px-4 py-3 text-red-500">{selectedEmployee.summary.final.lt}</td>
                        <td className="px-4 py-3 text-red-500">{selectedEmployee.summary.final.otLt}</td>
                        <td className="px-4 py-3">{selectedEmployee.summary.final.finalAtt}</td>
                        <td className="px-4 py-3 text-gray-500">Locked by {selectedEmployee.summary.final.lockedBy}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Attendance Table */}
              <div className="bg-white rounded-xl shadow-sm">
                <table className="w-full">
                  <thead>
                    <tr className="text-left border-b">
                      <th className="px-4 py-3 text-sm font-medium text-gray-600">Date</th>
                      <th className="px-4 py-3 text-sm font-medium text-gray-600">Time planned + WH</th>
                      <th className="px-4 py-3 text-sm font-medium text-gray-600">Actual Time</th>
                      <th className="px-4 py-3 text-sm font-medium text-gray-600">Fine/Bonus</th>
                      <th className="px-4 py-3 text-sm font-medium text-gray-600">Error</th>
                      <th className="px-4 py-3 text-sm font-medium text-gray-600">Cal. Att.</th>
                      <th className="px-4 py-3 text-sm font-medium text-gray-600">Final Att.</th>
                      <th className="px-4 py-3"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {attendanceData.map((entry, index) => (
                      <tr key={index} className="border-b last:border-b-0 hover:bg-gray-50">
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-2">
                            <span className="text-gray-500 w-6">{entry.day}</span>
                            <span>{entry.date}</span>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-gray-600">{entry.timePlanned}</td>
                        <td className="px-4 py-3">
                          <span className="text-red-500">{entry.actualTime}</span>
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-2">
                            <span className="text-green-500 font-medium">{entry.fineBonus.current}</span>
                            <span className="text-gray-400">{entry.fineBonus.previous}</span>
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          {entry.error && (
                            <div className="flex items-center gap-2">
                              <AlertCircle size={16} className="text-red-500" />
                            </div>
                          )}
                        </td>
                        <td className="px-4 py-3 font-medium">{entry.calAtt}</td>
                        <td className="px-4 py-3">
                          <div className="flex items-center justify-between">
                            <span className="font-medium">{entry.finalAtt}</span>
                            <ChevronDown size={16} className="text-gray-400" />
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-2">
                            <button className="hover:bg-gray-100 p-1 rounded">
                              <MoreHorizontal size={16} className="text-gray-400" />
                            </button>
                            <button className="hover:bg-gray-100 p-1 rounded">
                              <ChevronDown size={16} className="text-gray-400" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}