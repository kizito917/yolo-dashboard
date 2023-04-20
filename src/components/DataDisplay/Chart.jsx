import Chart from "react-apexcharts";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function Datachart() {
    const chartInfo = {
        options: {
            chart: {
                type: "donut"
            },
            labels: ["Male", "Female", "Transgender", "Others"],
            responsive: [{
                breakpoint: 480,
                options: {
                  chart: {
                    width: 200
                  },
                  legend: {
                    position: 'bottom'
                  }
                }
            }]
        },
        series: [300, 450, 23, 12]
    }

    return (
        <div className="mt-4 bg-default rounded-md">
            <div className="px-4 pb-4">
                <div className="flex justify-between pt-4">
                    <div>
                        <h4 className="text-md font-bold mb-2">Staffs by Gender</h4>
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="4" viewBox="0 0 48 4" fill="none">
                            <path d="M0 2H48" stroke="#1565D8" strokeWidth="3"></path>
                        </svg>
                    </div>
                    <div>
                        <h4 className="text-sm text-primary">
                            This Month
                            <span>
                                <KeyboardArrowDownIcon sx={{ color: '#1565D8'}} />
                            </span>
                        </h4>
                    </div>
                </div>
                <Chart
                options={chartInfo.options}
                series={chartInfo.series}
                type="donut"
                width="400"
                />
                <h5 className="font-bold">Total Staffs : 12,345</h5>
            </div>
        </div>
    )
}
