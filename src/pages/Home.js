import React from "react";
import "./Home.css";

function Home() {
	return (
		<div>
			<section className='firstHome'>
				<div
					id='carouselExampleDark'
					className='carousel carousel-white slide'
					data-bs-ride='carousel'
				>
					<div className='carousel-indicators'>
						<button
							type='button'
							data-bs-target='#carouselExampleDark'
							data-bs-slide-to='0'
							className='active'
							aria-current='true'
							aria-label='Slide 1'
						></button>
						<button
							type='button'
							data-bs-target='#carouselExampleDark'
							data-bs-slide-to='1'
							aria-label='Slide 2'
						></button>
						<button
							type='button'
							data-bs-target='#carouselExampleDark'
							data-bs-slide-to='2'
							aria-label='Slide 3'
						></button>
					</div>
					<div className='carousel-inner'>
						<div className='carousel-item active' data-bs-interval='10000'>
							<img
								src='https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
								className='d-block w-100'
								alt='...'
							/>
							<div className='carousel-caption d-none d-md-block'>
								<h5>First slide label</h5>
								<p>Some representative placeholder content for the first slide.</p>
							</div>
						</div>
						<div className='carousel-item' data-bs-interval='2000'>
							<img
								src='https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
								className='d-block w-100'
								alt='...'
							/>
							<div className='carousel-caption d-none d-md-block'>
								<h5>Second slide label</h5>
								<p>Some representative placeholder content for the second slide.</p>
							</div>
						</div>
						<div className='carousel-item'>
							<img
								src='https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80'
								className='d-block w-100'
								alt='...'
							/>
							<div className='carousel-caption d-none d-md-block'>
								<h5>Third slide label</h5>
								<p>Some representative placeholder content for the third slide.</p>
							</div>
						</div>
					</div>
					<button
						className='carousel-control-prev'
						type='button'
						data-bs-target='#carouselExampleDark'
						data-bs-slide='prev'
					>
						<span className='carousel-control-prev-icon' aria-hidden='true'></span>
						<span className='visually-hidden'>Previous</span>
					</button>
					<button
						className='carousel-control-next'
						type='button'
						data-bs-target='#carouselExampleDark'
						data-bs-slide='next'
					>
						<span className='carousel-control-next-icon' aria-hidden='true'></span>
						<span className='visually-hidden'>Next</span>
					</button>
				</div>
			</section>
			<section className='mt-5 secondHome container'>
				<h3 className='text-center text-uppercase m-4'>portofolio</h3>
				<div className='p-3 row row-cols-1 row-cols-md-3 g-3'>
					<div className='col'>
						<div className='card'>
							<img
								src='https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
								className='card-img-top'
								alt='...'
							/>
							<div className='card-body'>
								<h5 className='card-title'>Card title</h5>
								<p className='text-muted card-text'>
									This is a longer card with supporting text below as a natural lead-in to
									additional content. This content is a little bit longer.
								</p>
								<div className='d-grid'>
									<a href='https://www.google.ro/' class='btn btn-warning'>
										Go somewhere
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className='col'>
						<div className='card'>
							<img
								src='https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80'
								className='card-img-top'
								alt='...'
							/>
							<div className='card-body'>
								<h5 className='card-title'>Card title</h5>
								<p className='text-muted card-text'>
									This is a longer card with supporting text below as a natural lead-in to
									additional content. This content is a little bit longer.
								</p>
								<div className='d-grid'>
									<a href='https://www.google.ro/' class='btn btn-primary'>
										Go somewhere
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className='col'>
						<div className='card'>
							<img
								src='https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
								className='card-img-top'
								alt='...'
							/>
							<div className='card-body'>
								<h5 className='card-title'>Card title</h5>
								<p className='text-muted card-text'>
									This is a longer card with supporting text below as a natural lead-in to
									additional content. This content is a little bit longer.
								</p>
								<div className='d-grid'>
									<a href='https://www.google.ro/' class='btn btn-primary'>
										Go somewhere
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className='thirdHome container'>
				<h3 className='text-center text-uppercase m-4'>other work</h3>
				<div className='p-3 row row-cols-1 row-cols-md-3 g-3'>
					<div className='col'>
						<div className='card'>
							<img
								src='https://images.unsplash.com/photo-1598550476439-6847785fcea6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
								className='card-img-top'
								alt='...'
							/>
							<div className='card-body'>
								<h5 className='card-title'>Card title</h5>
								<p className='text-muted card-text'>
									This is a longer card with supporting text below as a natural lead-in to
									additional content. This content is a little bit longer.
								</p>
								<div className='d-grid'>
									<a href='https://www.google.ro/' class='btn btn-warning'>
										Go somewhere
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className='col'>
						<div className='card'>
							<img
								src='https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
								className='card-img-top'
								alt='...'
							/>
							<div className='card-body'>
								<h5 className='card-title'>Card title</h5>
								<p className='text-muted card-text'>
									This is a longer card with supporting text below as a natural lead-in to
									additional content. This content is a little bit longer.
								</p>
								<div className='d-grid'>
									<a href='https://www.google.ro/' class='btn btn-primary'>
										Go somewhere
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className='col'>
						<div className='card'>
							<img
								src='https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
								className='card-img-top'
								alt='...'
							/>
							<div className='card-body'>
								<h5 className='card-title'>Card title</h5>
								<p className='text-muted card-text'>
									This is a longer card with supporting text below as a natural lead-in to
									additional content. This content is a little bit longer.
								</p>
								<div className='d-grid'>
									<a href='https://www.google.ro/' class='btn btn-primary'>
										Go somewhere
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Home;
