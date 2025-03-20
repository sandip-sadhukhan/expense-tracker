import React from "react";
import cn from 'classnames'

interface Props {
    label: string;
    amount: number;
}

const TransactionCard: React.FC<Props> = ({ label, amount }) => {
    return (
        <div className={cn("flex justify-between bg-white w-full shadow-sm rounded-xs px-2 py-1.5 border-r-5", { 'border-green-600': amount > 0 }, { 'border-red-800': amount < 0 })}>
            <p className="text-sm font-medium">{label}</p>
            <p className="text-sm font-medium">
                {amount > 0 ? '+' : '-'}₹{Math.abs(amount)}
            </p>
        </div>
    )
}

export default TransactionCard