// import React from 'react'
import { Button, Table } from 'antd';

export default function Expert() {
  return (
    <div className="flex flex-col gap-6">
        <div className="flex justify-between">
            <p className="text-2xl font-semibold text-[#041f4e]">Experts</p>
            <Button>Ajouter</Button>
        </div>
        <div>
            <Table/>
        </div>
    </div>
  )
}
