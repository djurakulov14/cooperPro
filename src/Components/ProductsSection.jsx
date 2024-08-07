
import React from 'react'

function ProductsSection() {

	let arr = [
		{
			id: 1,
			class: "first",
			name: "Для эфирных масел"
		},{
			id: 2,
			class: "second",
			name: "Для гидролатов"
		},{
			id: 3,
			class: "first",
			name: "Медная посуда"
		},{
			id: 4,
			class: "second",
			name: "Аксессуары из меди"
		},{
			id: 5,
			class: "first",
			name: "Индивидуальный заказ"
		},{
			id: 6,
			class: "second",
			name: "Скидки и предложения"
		},
	]


  return (
    <section className=' mt-12 container m-auto flex flex-col items-center mb-[160px]'>
        <h1 className=' text-5xl uppercase text-center mb-8'>Наша продукция</h1>
        <div className="items w-full flex gap-[30px] flex-wrap">
			{
				arr.map(item =>
					<div key={item.id} className={item.class === "first" ? 'first' : 'second'}>
						<div className=' h-full flex flex-col justify-between text-center relative z-10'>
							<div></div>
							<div className=' absolute z-[5] w-full h-full bg-gradient-to-t from-[#072C2650] to-transparent hover:bg-gradient-to-t hover:from-[#CB8D62] hover:to-transparent '></div>
							<span className=' text-white text-3xl mb-5 relative z-10'>{item.name}</span>
						</div>
					</div>
				)
			}
        </div>
    </section>
  )
}

export default ProductsSection