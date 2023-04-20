// External imports
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

export default function Card({svg, count, cardTitle}) {
    return (
        <div className="bg-default rounded-md">
            <div className="px-4 pt-4 pb-6">  
                <div className="flex justify-between">
                    {svg}
                    <h4 className="text-xs">
                        <b>All Time</b>
                        <span>
                            <KeyboardArrowDownIcon />
                        </span>
                    </h4>
                </div>
                <div className="pt-8">
                    <h2 className="text-xl"><b>{count}</b></h2>
                    <h2 className="text-sm">{cardTitle}</h2>
                    <h4 className="pt-8 text-xs">
                        <span>
                            <ArrowDownwardIcon sx={{ color: 'red'}} />
                        </span>
                        5% Less than last month
                    </h4>
                </div>
            </div>
        </div>
    )
}
