export default function Hero() {
	return (
		<div className="bg-[rgb(18,18,18)] w-full relative grid grid-cols-[repeat(1,minmax(0px,1fr))] gap-4 box-border mx-auto pb-16 px-6 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl sm:grid-cols-[repeat(2,minmax(0px,1fr))] md:grid-cols-[repeat(12,minmax(0px,1fr))] md:pb-24 lg:pb-24 lg:px-16 xl:gap-3 xl:px-20 2xl:gap-6">
			<a
				href="/database"
				className="relative col-span-6 flex w-full flex-col gap-5 box-border focus:rounded-xl focus:outline-offset-2 focus:shadow-[0_0_#0000,0_0_#0000,var(--tw-shadow,0_0_#0000)] sm:h-[400px] md:col-span-12 lg:flex-row"
			>
				<div className="relative flex h-full w-full items-center justify-center transition-all ease-in-out duration-[0.15s] box-border p-px rounded-lg hover:shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),0_0_#0000] md:rounded-xl">
					<div className="relative z-10 flex h-full w-full flex-1 flex-row items-start justify-between gap-4 overflow-hidden box-border p-4 rounded-[7px] sm:flex-col sm:items-center md:rounded-[11px]">
						<div className="relative z-10 flex h-full w-full flex-col items-start gap-2 text-left box-border mx-auto sm:items-center sm:gap-4 sm:text-center md:max-w-[250px] md:justify-start md:ml-2 md:mt-2">
							<div className="flex items-center gap-2 box-border">
								<svg
									width={18}
									height={18}
									viewBox="0 0 25 25"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									className="block align-middle box-border"
								>
									<path
										d="M5.18625 8.66531H19.5035V15.331H5.18625V8.66531Z M4 17.0007C4 16.0804 4.7461 15.3343 5.66645 15.3343H18.9984C19.9187 15.3343 20.6648 16.0804 20.6648 17.0007V20.3335C20.6648 21.2539 19.9187 22 18.9984 22H5.66646C4.7461 22 4 21.2539 4 20.3335V17.0007Z M4 3.66646C4 2.7461 4.7461 2 5.66645 2H18.9984C19.9187 2 20.6648 2.7461 20.6648 3.66645V6.99926C20.6648 7.91962 19.9187 8.66572 18.9984 8.66572H5.66646C4.7461 8.66572 4 7.91962 4 6.99926V3.66646Z"
										stroke="currentColor"
										strokeMiterlimit={10}
										strokeLinejoin="round"
										strokeLinecap="round"
										strokeWidth="1.5"
										className="box-border"
									/>
								</svg>
								<h2 className="box-border text-[24px] m-0 scroll-mt-[90px]">
									Postgres Database
								</h2>
							</div>
							<div className="flex flex-1 flex-col justify-between gap-2 box-border">
								<p className="text-[21px] leading-5 box-border m-0">
									Every project is
									<strong className="box-border">
										a full Postgres database
									</strong>
									, the world's most trusted relational
									database.
								</p>
								<span className="hidden box-border md:block lg:block">
									<ul className="flex flex-col gap-1 text-sm leading-5 box-border">
										<li className="box-border">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width={24}
												height={24}
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												strokeWidth={2}
												strokeLinecap="round"
												strokeLinejoin="round"
												className="inline h-4 w-4 align-middle box-border"
											>
												<path
													d="M20 6 9 17l-5-5"
													className="box-border"
												/>
											</svg>
											100% portable
										</li>
										<li className="box-border">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width={24}
												height={24}
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												strokeWidth={2}
												strokeLinecap="round"
												strokeLinejoin="round"
												className="inline h-4 w-4 align-middle box-border"
											>
												<path
													d="M20 6 9 17l-5-5"
													className="box-border"
												/>
											</svg>
											Built-in Auth with RLS
										</li>
										<li className="box-border">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width={24}
												height={24}
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												strokeWidth={2}
												strokeLinecap="round"
												strokeLinejoin="round"
												className="inline h-4 w-4 align-middle box-border"
											>
												<path
													d="M20 6 9 17l-5-5"
													className="box-border"
												/>
											</svg>
											Easy to extend
										</li>
									</ul>
								</span>
							</div>
						</div>
						<figure
							role="img"
							aria-label="Supabase Postgres database visual composition"
							className="absolute z-0 hidden box-border m-0 inset-0 sm:block"
						>
							<span className="absolute flex h-full w-full items-end justify-center box-border my-auto top-12 inset-x-0 md:aspect-square md:w-auto md:items-center md:justify-end md:inset-[0px_0px_0px_auto] xl:-right-12">
								<img
									alt="Supabase Postgres database"
									fetchpriority="high"
									decoding="async"
									data-nimg="fill"
									sizes="100%"
									srcSet="
          /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdatabase-dark.png&w=16&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6     16w,
          /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdatabase-dark.png&w=32&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6     32w,
          /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdatabase-dark.png&w=48&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6     48w,
          /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdatabase-dark.png&w=64&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6     64w,
          /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdatabase-dark.png&w=96&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6     96w,
          /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdatabase-dark.png&w=128&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6   128w,
          /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdatabase-dark.png&w=256&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6   256w,
          /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdatabase-dark.png&w=384&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6   384w,
          /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdatabase-dark.png&w=640&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6   640w,
          /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdatabase-dark.png&w=750&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6   750w,
          /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdatabase-dark.png&w=828&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6   828w,
          /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdatabase-dark.png&w=1080&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6 1080w,
          /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdatabase-dark.png&w=1200&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6 1200w,
          /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdatabase-dark.png&w=1920&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6 1920w,
          /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdatabase-dark.png&w=2048&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6 2048w,
          /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdatabase-dark.png&w=3840&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6 3840w
        "
									src="https://supabase.com/_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdatabase-dark.png&w=3840&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6"
									className="absolute h-full w-full text-transparent block z-0 object-contain object-[center_center] transition-opacity ease-in-out duration-[0.15s] align-middle max-w-full box-border inset-0 md:w-auto"
								/>
								<img
									alt="Supabase Postgres database"
									fetchpriority="high"
									decoding="async"
									data-nimg="fill"
									sizes="100%"
									srcSet="
          /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdatabase-light.png&w=16&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6     16w,
          /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdatabase-light.png&w=32&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6     32w,
          /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdatabase-light.png&w=48&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6     48w,
          /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdatabase-light.png&w=64&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6     64w,
          /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdatabase-light.png&w=96&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6     96w,
          /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdatabase-light.png&w=128&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6   128w,
          /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdatabase-light.png&w=256&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6   256w,
          /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdatabase-light.png&w=384&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6   384w,
          /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdatabase-light.png&w=640&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6   640w,
          /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdatabase-light.png&w=750&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6   750w,
          /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdatabase-light.png&w=828&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6   828w,
          /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdatabase-light.png&w=1080&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6 1080w,
          /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdatabase-light.png&w=1200&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6 1200w,
          /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdatabase-light.png&w=1920&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6 1920w,
          /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdatabase-light.png&w=2048&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6 2048w,
          /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdatabase-light.png&w=3840&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6 3840w
        "
									src="https://supabase.com/_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdatabase-light.png&w=3840&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6"
									className="absolute h-full w-full text-transparent hidden z-0 object-contain object-[center_center] transition-opacity ease-in-out duration-[0.15s] align-middle max-w-full box-border inset-0 md:w-auto"
								/>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 390 430"
									className="absolute z-10 h-full w-full opacity-0 transition-opacity ease-in-out duration-[0.15s] will-change-transform block align-middle box-border m-auto"
								>
									<g
										stroke="hsl(var(--foreground-lighter))"
										filter="url(#filter5_bd_467_4905)"
										className="box-border"
									>
										<path
											d="M192.144 125.816h-53.465c-8.506 0-16.159 5.17-19.334 13.061L99.0045 189.43c-3.0613 7.608-1.3448 16.306 4.3775 22.181l10.232 10.506c4.792 4.919 7.474 11.516 7.474 18.384l-.001 14.473c0 20.197 16.373 36.569 36.569 36.569 6.16 0 11.154-4.993 11.154-11.153l.001-86.241c0-18.629 7.441-36.486 20.668-49.602 2.746-2.723 7.178-2.704 9.9.041 2.722 2.745 2.703 7.178-.042 9.9-10.577 10.488-16.526 24.766-16.526 39.661l-.001 86.241c0 13.892-11.262 25.153-25.154 25.153-27.928 0-50.569-22.64-50.569-50.569l.001-14.474c0-3.218-1.257-6.309-3.503-8.615L93.353 221.38c-9.5904-9.847-12.4673-24.424-7.3366-37.176l20.3406-50.553c5.308-13.192 18.101-21.835 32.322-21.835h55.729v.084h10.339c49.104 0 88.91 39.806 88.91 88.91v50.842c0 3.866-3.134 7-7 7s-7-3.134-7-7V200.81c0-41.372-33.538-74.91-74.91-74.91H193.23c-.37 0-.732-.029-1.086-.084Z"
											className="box-border"
										/>
										<path
											d="M210.03 283.94c0-3.866-3.134-7-7-7s-7 3.134-7 7v3.113c0 26.959 21.854 48.814 48.813 48.814 26.351 0 47.825-20.879 48.781-46.996h24.614c3.866 0 7-3.134 7-7s-3.134-7-7-7h-26.841c-30.744 0-60.256-12.083-82.173-33.643-2.756-2.711-7.188-2.675-9.899.081-2.711 2.756-2.675 7.188.081 9.9 21.725 21.371 50.116 34.423 80.228 37.134-.679 18.629-15.995 33.524-34.791 33.524-19.227 0-34.813-15.587-34.813-34.814v-3.113ZM238.03 202.145c0 4.792 3.885 8.677 8.677 8.677s8.676-3.885 8.676-8.677-3.884-8.676-8.676-8.676-8.677 3.884-8.677 8.676Z"
											className="box-border"
										/>
									</g>
									<path
										stroke="url(#a)"
										d="M192.144 125.816h-53.465c-8.506 0-16.159 5.17-19.334 13.061L99.0045 189.43c-3.0613 7.608-1.3448 16.306 4.3775 22.181l10.232 10.506c4.792 4.919 7.474 11.516 7.474 18.384l-.001 14.473c0 20.197 16.373 36.569 36.569 36.569 6.16 0 11.154-4.993 11.154-11.153l.001-86.241c0-18.629 7.441-36.486 20.668-49.602 2.746-2.723 7.178-2.704 9.9.041 2.722 2.745 2.703 7.178-.042 9.9-10.577 10.488-16.526 24.766-16.526 39.661l-.001 86.241c0 13.892-11.262 25.153-25.154 25.153-27.928 0-50.569-22.64-50.569-50.569l.001-14.474c0-3.218-1.257-6.309-3.503-8.615L93.353 221.38c-9.5904-9.847-12.4673-24.424-7.3366-37.176l20.3406-50.553c5.308-13.192 18.101-21.835 32.322-21.835h55.729v.084h10.339c49.104 0 88.91 39.806 88.91 88.91v50.842c0 3.866-3.134 7-7 7s-7-3.134-7-7V200.81c0-41.372-33.538-74.91-74.91-74.91H193.23c-.37 0-.732-.029-1.086-.084Z"
										className="box-border"
									/>
									<path
										stroke="url(#b)"
										d="M210.03 283.94c0-3.866-3.134-7-7-7s-7 3.134-7 7v3.113c0 26.959 21.854 48.814 48.813 48.814 26.351 0 47.825-20.879 48.781-46.996h24.614c3.866 0 7-3.134 7-7s-3.134-7-7-7h-26.841c-30.744 0-60.256-12.083-82.173-33.643-2.756-2.711-7.188-2.675-9.899.081-2.711 2.756-2.675 7.188.081 9.9 21.725 21.371 50.116 34.423 80.228 37.134-.679 18.629-15.995 33.524-34.791 33.524-19.227 0-34.813-15.587-34.813-34.814v-3.113Z"
										className="box-border"
									/>
									<path
										stroke="url(#c)"
										d="M238.03 202.145c0 4.792 3.885 8.677 8.677 8.677s8.676-3.885 8.676-8.677-3.884-8.676-8.676-8.676-8.677 3.884-8.677 8.676Z"
										className="box-border"
									/>
									<defs className="box-border">
										<radialGradient
											cx={0}
											cy={0}
											r={1}
											gradientUnits="userSpaceOnUse"
											gradientTransform="translate(396.125 67.49652099609375) rotate(45) scale(166 180)"
											className="box-border"
										>
											<stop
												stopColor="hsl(var(--brand-default))"
												className="box-border"
											/>
											<stop
												offset={1}
												stopColor="hsl(var(--foreground-lighter))"
												className="box-border"
											/>
										</radialGradient>
										<radialGradient
											cx={0}
											cy={0}
											r={1}
											gradientUnits="userSpaceOnUse"
											gradientTransform="translate(396.125 67.49652099609375) rotate(45) scale(166 180)"
											className="box-border"
										>
											<stop
												stopColor="hsl(var(--brand-default))"
												className="box-border"
											/>
											<stop
												offset={1}
												stopColor="hsl(var(--foreground-lighter))"
												className="box-border"
											/>
										</radialGradient>
										<radialGradient
											cx={0}
											cy={0}
											r={1}
											gradientUnits="userSpaceOnUse"
											gradientTransform="translate(396.125 67.49652099609375) rotate(45) scale(166 180)"
											className="box-border"
										>
											<stop
												stopColor="hsl(var(--brand-default))"
												className="box-border"
											/>
											<stop
												offset={1}
												stopColor="hsl(var(--foreground-lighter))"
												className="box-border"
											/>
										</radialGradient>
									</defs>
								</svg>
							</span>
						</figure>
						<div className="pointer-events-none absolute z-10 h-full w-full opacity-20 box-border inset-0" />
					</div>
				</div>
			</a>
			<a
				href="/auth"
				className="relative col-span-6 flex w-full flex-col gap-5 box-border focus:rounded-xl focus:outline-offset-2 focus:shadow-[0_0_#0000,0_0_#0000,var(--tw-shadow,0_0_#0000)] sm:h-[400px] lg:flex-row xl:col-span-3"
			>
				<div className="relative flex h-full w-full items-center justify-center transition-all ease-in-out duration-[0.15s] box-border p-px rounded-lg hover:shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),0_0_#0000] md:rounded-xl">
					<div className="relative z-10 flex h-full w-full flex-1 flex-row items-start justify-between gap-4 overflow-hidden box-border p-4 rounded-[7px] sm:flex-col sm:items-center md:rounded-[11px]">
						<div className="relative z-10 flex h-full w-full flex-col items-start gap-2 text-left box-border mx-auto sm:items-center sm:gap-4 sm:text-center lg:pl-2">
							<div className="flex items-center gap-2 box-border">
								<svg
									width={18}
									height={18}
									viewBox="0 0 25 25"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									className="block align-middle box-border"
								>
									<path
										d="M5.03305 15.8071H12.7252M5.03305 15.8071V18.884H12.7252V15.8071M5.03305 15.8071V12.7302H12.7252V15.8071M15.0419 8.15385V5.07692C15.0419 3.37759 13.6643 2 11.965 2C10.2657 2 8.88814 3.37759 8.88814 5.07692V8.15385M5 11.2307L5 18.9231C5 20.6224 6.37757 22 8.07689 22H15.769C17.4683 22 18.8459 20.6224 18.8459 18.9231V11.2307C18.8459 9.53142 17.4683 8.15385 15.769 8.15385L8.07689 8.15385C6.37757 8.15385 5 9.53142 5 11.2307Z"
										stroke="currentColor"
										strokeMiterlimit={10}
										strokeLinejoin="round"
										strokeLinecap="round"
										strokeWidth="1.5"
										className="box-border"
									/>
								</svg>
								<h2 className="box-border text-[24px] m-0 scroll-mt-[90px]">
									Authentication
								</h2>
							</div>
							<div className="flex flex-1 flex-col justify-between gap-2 box-border">
								<p className="text-[21px] leading-5 box-border m-0">
									<strong className="box-border">
										Add user sign ups and logins
									</strong>
									,
									<br className="hidden box-border lg:inline-block" />
									securing your data with Row Level Security.
								</p>
							</div>
						</div>
						<figure
							role="img"
							aria-label="Supabase Authentication provides Row Level Security which enables you to define custom Policies to restrict access to your database"
							className="absolute inset-[-4rem_0px_0px] z-0 hidden box-border m-0 sm:block xl:inset-0"
						>
							<img
								alt="Supabase Authentication user db rows"
								fetchpriority="high"
								decoding="async"
								data-nimg="fill"
								sizes="100%"
								srcSet="
        /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fauth.svg&w=16&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6     16w,
        /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fauth.svg&w=32&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6     32w,
        /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fauth.svg&w=48&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6     48w,
        /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fauth.svg&w=64&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6     64w,
        /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fauth.svg&w=96&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6     96w,
        /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fauth.svg&w=128&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6   128w,
        /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fauth.svg&w=256&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6   256w,
        /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fauth.svg&w=384&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6   384w,
        /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fauth.svg&w=640&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6   640w,
        /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fauth.svg&w=750&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6   750w,
        /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fauth.svg&w=828&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6   828w,
        /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fauth.svg&w=1080&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6 1080w,
        /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fauth.svg&w=1200&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6 1200w,
        /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fauth.svg&w=1920&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6 1920w,
        /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fauth.svg&w=2048&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6 2048w,
        /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fauth.svg&w=3840&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6 3840w
      "
								src="https://supabase.com/_next/image?url=%2Fimages%2Findex%2Fproducts%2Fauth.svg&w=3840&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6"
								className="absolute h-full w-full text-transparent block object-cover object-[center_center] align-middle max-w-full box-border inset-0 xl:object-[center_bottom]"
							/>
							<img
								alt="Supabase Authentication user db rows"
								aria-hidden="true"
								loading="lazy"
								decoding="async"
								data-nimg="fill"
								sizes="100%"
								srcSet="
        /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fauth-active.svg&w=16&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6     16w,
        /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fauth-active.svg&w=32&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6     32w,
        /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fauth-active.svg&w=48&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6     48w,
        /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fauth-active.svg&w=64&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6     64w,
        /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fauth-active.svg&w=96&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6     96w,
        /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fauth-active.svg&w=128&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6   128w,
        /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fauth-active.svg&w=256&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6   256w,
        /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fauth-active.svg&w=384&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6   384w,
        /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fauth-active.svg&w=640&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6   640w,
        /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fauth-active.svg&w=750&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6   750w,
        /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fauth-active.svg&w=828&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6   828w,
        /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fauth-active.svg&w=1080&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6 1080w,
        /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fauth-active.svg&w=1200&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6 1200w,
        /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fauth-active.svg&w=1920&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6 1920w,
        /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fauth-active.svg&w=2048&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6 2048w,
        /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fauth-active.svg&w=3840&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6 3840w
      "
								src="https://supabase.com/_next/image?url=%2Fimages%2Findex%2Fproducts%2Fauth-active.svg&w=3840&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6"
								className="absolute h-full w-full text-transparent block object-cover object-[center_center] opacity-0 transition-opacity ease-in-out duration-[0.15s] align-middle max-w-full box-border inset-0 xl:object-[center_bottom]"
							/>
							<img
								alt="Supabase Authentication user db rows"
								fetchpriority="high"
								decoding="async"
								data-nimg="fill"
								sizes="100%"
								srcSet="
        /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fauth-light.svg&w=16&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6     16w,
        /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fauth-light.svg&w=32&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6     32w,
        /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fauth-light.svg&w=48&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6     48w,
        /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fauth-light.svg&w=64&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6     64w,
        /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fauth-light.svg&w=96&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6     96w,
        /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fauth-light.svg&w=128&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6   128w,
        /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fauth-light.svg&w=256&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6   256w,
        /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fauth-light.svg&w=384&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6   384w,
        /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fauth-light.svg&w=640&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6   640w,
        /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fauth-light.svg&w=750&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6   750w,
        /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fauth-light.svg&w=828&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6   828w,
        /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fauth-light.svg&w=1080&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6 1080w,
        /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fauth-light.svg&w=1200&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6 1200w,
        /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fauth-light.svg&w=1920&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6 1920w,
        /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fauth-light.svg&w=2048&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6 2048w,
        /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fauth-light.svg&w=3840&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6 3840w
      "
								src="https://supabase.com/_next/image?url=%2Fimages%2Findex%2Fproducts%2Fauth-light.svg&w=3840&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6"
								className="absolute h-full w-full text-transparent hidden object-cover object-[center_center] align-middle max-w-full box-border inset-0 xl:object-[center_bottom]"
							/>
							<img
								alt="Supabase Authentication user db rows"
								aria-hidden="true"
								loading="lazy"
								decoding="async"
								data-nimg="fill"
								sizes="100%"
								srcSet="
        /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fauth-active-light.svg&w=16&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6     16w,
        /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fauth-active-light.svg&w=32&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6     32w,
        /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fauth-active-light.svg&w=48&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6     48w,
        /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fauth-active-light.svg&w=64&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6     64w,
        /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fauth-active-light.svg&w=96&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6     96w,
        /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fauth-active-light.svg&w=128&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6   128w,
        /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fauth-active-light.svg&w=256&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6   256w,
        /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fauth-active-light.svg&w=384&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6   384w,
        /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fauth-active-light.svg&w=640&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6   640w,
        /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fauth-active-light.svg&w=750&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6   750w,
        /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fauth-active-light.svg&w=828&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6   828w,
        /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fauth-active-light.svg&w=1080&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6 1080w,
        /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fauth-active-light.svg&w=1200&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6 1200w,
        /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fauth-active-light.svg&w=1920&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6 1920w,
        /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fauth-active-light.svg&w=2048&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6 2048w,
        /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fauth-active-light.svg&w=3840&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6 3840w
      "
								src="https://supabase.com/_next/image?url=%2Fimages%2Findex%2Fproducts%2Fauth-active-light.svg&w=3840&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6"
								className="absolute h-full w-full text-transparent hidden object-cover object-[center_center] opacity-0 transition-opacity ease-in-out duration-[0.15s] align-middle max-w-full box-border inset-0 xl:object-[center_bottom]"
							/>
						</figure>
						<div className="pointer-events-none absolute z-10 h-full w-full opacity-20 box-border inset-0" />
					</div>
				</div>
			</a>
			<a
				href="/edge-functions"
				className="relative col-span-6 flex w-full flex-col gap-5 box-border focus:rounded-xl focus:outline-offset-2 focus:shadow-[0_0_#0000,0_0_#0000,var(--tw-shadow,0_0_#0000)] sm:h-[400px] lg:flex-row xl:col-span-3"
			>
				<div className="relative flex h-full w-full items-center justify-center transition-all ease-in-out duration-[0.15s] box-border p-px rounded-lg hover:shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),0_0_#0000] md:rounded-xl">
					<div className="relative z-10 flex h-full w-full flex-1 flex-row items-start justify-between gap-4 overflow-hidden box-border p-4 rounded-[7px] sm:flex-col sm:items-center md:rounded-[11px]">
						<div className="relative z-10 flex h-full w-full flex-col items-start gap-2 text-left box-border mx-auto sm:items-center sm:gap-4 sm:text-center lg:pl-2">
							<div className="flex items-center gap-2 box-border">
								<svg
									width={18}
									height={18}
									viewBox="0 0 25 25"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									className="block align-middle box-border"
								>
									<path
										d="M6.6594 21.8201C8.10788 22.5739 9.75418 23 11.5 23C17.299 23 22 18.299 22 12.5C22 10.7494 21.5716 9.09889 20.8139 7.64754M16.4016 3.21191C14.9384 2.43814 13.2704 2 11.5 2C5.70101 2 1 6.70101 1 12.5C1 14.287 1.44643 15.9698 2.23384 17.4428M2.23384 17.4428C1.81058 17.96 1.55664 18.6211 1.55664 19.3416C1.55664 20.9984 2.89979 22.3416 4.55664 22.3416C6.21349 22.3416 7.55664 20.9984 7.55664 19.3416C7.55664 17.6847 6.21349 16.3416 4.55664 16.3416C3.62021 16.3416 2.78399 16.7706 2.23384 17.4428ZM21.5 5.64783C21.5 7.30468 20.1569 8.64783 18.5 8.64783C16.8432 8.64783 15.5 7.30468 15.5 5.64783C15.5 3.99097 16.8432 2.64783 18.5 2.64783C20.1569 2.64783 21.5 3.99097 21.5 5.64783ZM18.25 12.5C18.25 16.2279 15.2279 19.25 11.5 19.25C7.77208 19.25 4.75 16.2279 4.75 12.5C4.75 8.77208 7.77208 5.75 11.5 5.75C15.2279 5.75 18.25 8.77208 18.25 12.5Z"
										stroke="currentColor"
										strokeMiterlimit={10}
										strokeLinejoin="round"
										strokeLinecap="round"
										strokeWidth="1.5"
										className="box-border"
									/>
								</svg>
								<h2 className="box-border text-[24px] m-0 scroll-mt-[90px]">
									Edge Functions
								</h2>
							</div>
							<div className="flex flex-1 flex-col justify-between gap-2 box-border">
								<p className="text-[21px] leading-5 box-border m-0">
									Easily write custom code
									<br className="hidden box-border sm:inline-block" />
									<strong className="box-border">
										without deploying or scaling servers.
									</strong>
								</p>
							</div>
						</div>
						<figure
							role="img"
							aria-label="Supabase Edge Functions visual composition"
							className="absolute z-20 hidden box-border m-0 inset-0 sm:block"
						>
							<img
								alt="Supabase Edge Functions globe"
								fetchpriority="high"
								decoding="async"
								data-nimg="fill"
								sizes="100%"
								srcSet="
        /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fedge-functions-dark.svg&w=16&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6     16w,
        /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fedge-functions-dark.svg&w=32&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6     32w,
        /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fedge-functions-dark.svg&w=48&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6     48w,
        /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fedge-functions-dark.svg&w=64&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6     64w,
        /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fedge-functions-dark.svg&w=96&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6     96w,
        /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fedge-functions-dark.svg&w=128&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6   128w,
        /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fedge-functions-dark.svg&w=256&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6   256w,
        /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fedge-functions-dark.svg&w=384&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6   384w,
        /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fedge-functions-dark.svg&w=640&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6   640w,
        /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fedge-functions-dark.svg&w=750&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6   750w,
        /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fedge-functions-dark.svg&w=828&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6   828w,
        /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fedge-functions-dark.svg&w=1080&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6 1080w,
        /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fedge-functions-dark.svg&w=1200&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6 1200w,
        /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fedge-functions-dark.svg&w=1920&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6 1920w,
        /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fedge-functions-dark.svg&w=2048&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6 2048w,
        /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fedge-functions-dark.svg&w=3840&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6 3840w
      "
								src="https://supabase.com/_next/image?url=%2Fimages%2Findex%2Fproducts%2Fedge-functions-dark.svg&w=3840&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6"
								className="absolute h-full w-full text-transparent block object-cover object-[center_center] align-middle max-w-full box-border inset-0"
							/>
							<img
								alt="Supabase Edge Functions globe"
								fetchpriority="high"
								decoding="async"
								data-nimg="fill"
								sizes="100%"
								srcSet="
        /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fedge-functions-light.svg&w=16&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6     16w,
        /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fedge-functions-light.svg&w=32&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6     32w,
        /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fedge-functions-light.svg&w=48&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6     48w,
        /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fedge-functions-light.svg&w=64&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6     64w,
        /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fedge-functions-light.svg&w=96&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6     96w,
        /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fedge-functions-light.svg&w=128&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6   128w,
        /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fedge-functions-light.svg&w=256&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6   256w,
        /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fedge-functions-light.svg&w=384&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6   384w,
        /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fedge-functions-light.svg&w=640&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6   640w,
        /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fedge-functions-light.svg&w=750&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6   750w,
        /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fedge-functions-light.svg&w=828&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6   828w,
        /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fedge-functions-light.svg&w=1080&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6 1080w,
        /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fedge-functions-light.svg&w=1200&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6 1200w,
        /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fedge-functions-light.svg&w=1920&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6 1920w,
        /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fedge-functions-light.svg&w=2048&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6 2048w,
        /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fedge-functions-light.svg&w=3840&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6 3840w
      "
								src="https://supabase.com/_next/image?url=%2Fimages%2Findex%2Fproducts%2Fedge-functions-light.svg&w=3840&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6"
								className="absolute h-full w-full text-transparent hidden object-cover object-[center_center] align-middle max-w-full box-border inset-0"
							/>
							<div className="absolute flex h-fit w-full max-w-[200px] items-center justify-start border text-left text-xs leading-4 box-border mx-auto px-2.5 py-1.5 rounded-full border-solid inset-[48%_0px_0px] xl:inset-0">
								<span className="box-border mr-2">$</span>
								supabase
								<span className="inline-block box-border ml-1">
									functions
									<span className="box-border">serve</span>
								</span>
							</div>
						</figure>
						<div className="pointer-events-none absolute z-10 h-full w-full opacity-20 box-border inset-0" />
					</div>
				</div>
			</a>
			<a
				href="/storage"
				className="relative col-span-6 flex w-full flex-col gap-5 box-border focus:rounded-xl focus:outline-offset-2 focus:shadow-[0_0_#0000,0_0_#0000,var(--tw-shadow,0_0_#0000)] sm:h-[400px] lg:flex-row xl:col-span-3"
			>
				<div className="relative flex h-full w-full items-center justify-center transition-all ease-in-out duration-[0.15s] box-border p-px rounded-lg hover:shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),0_0_#0000] md:rounded-xl">
					<div className="relative z-10 flex h-full w-full flex-1 flex-row items-start justify-between gap-4 overflow-hidden box-border p-4 rounded-[7px] sm:flex-col sm:items-center md:rounded-[11px]">
						<div className="relative z-10 flex h-full w-full flex-col items-start gap-2 text-left box-border mx-auto sm:items-center sm:gap-4 sm:text-center lg:pl-2">
							<div className="flex items-center gap-2 box-border">
								<svg
									width={18}
									height={18}
									viewBox="0 0 25 25"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									className="block align-middle box-border"
								>
									<path
										d="M20.4997 12.1386V9.15811L14.8463 3.53163H6.43717C5.57423 3.53163 4.87467 4.23119 4.87467 5.09413V9.78087M20.4447 9.13199L14.844 3.53125L14.844 7.56949C14.844 8.43243 15.5436 9.13199 16.4065 9.13199L20.4447 9.13199ZM7.12729 9.78087H4.83398C3.97104 9.78087 3.27148 10.4804 3.27148 11.3434V19.1559C3.27148 20.8818 4.67059 22.2809 6.39648 22.2809H18.8965C20.6224 22.2809 22.0215 20.8818 22.0215 19.1559V13.7011C22.0215 12.8381 21.3219 12.1386 20.459 12.1386H10.8032C10.3933 12.1386 9.99969 11.9774 9.70743 11.6899L8.22312 10.2296C7.93086 9.94202 7.53729 9.78087 7.12729 9.78087Z"
										stroke="currentColor"
										strokeMiterlimit={10}
										strokeLinejoin="round"
										strokeLinecap="round"
										strokeWidth="1.5"
										className="box-border"
									/>
								</svg>
								<h2 className="box-border text-[24px] m-0 scroll-mt-[90px]">
									Storage
								</h2>
							</div>
							<div className="flex flex-1 flex-col justify-between gap-2 box-border">
								<p className="text-[21px] leading-5 box-border m-0">
									<strong className="box-border">
										Store, organize, and serve
									</strong>
									<br className="hidden box-border sm:inline-block 2xl:inline-block" />
									large files, from videos to images.
								</p>
							</div>
						</div>
						<figure
							role="img"
							aria-label="Supabase Storage supports images, documents and videos"
							className="absolute hidden overflow-hidden box-border m-0 inset-0 sm:block"
						>
							<div className="relative z-10 flex h-full w-auto animate-[35s_linear_0s_infinite_normal_none_paused_marquee] items-end transition-transform ease-in-out duration-[0.15s] will-change-transform box-border pb-4 left-0">
								<div className="flex flex-col gap-2 box-border ml-2">
									<div className="flex h-[60px] w-[60px] items-center justify-center border box-border rounded-lg border-solid md:h-[62px] md:w-[62px] md:min-w-[62px]">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width={24}
											height={24}
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth={2}
											strokeLinecap="round"
											strokeLinejoin="round"
											className="h-6 w-6 block align-middle box-border"
										>
											<rect
												width={18}
												height={18}
												x={3}
												y={3}
												rx={2}
												ry={2}
												className="box-border"
											/>
											<circle
												cx={9}
												cy={9}
												r={2}
												className="box-border"
											/>
											<path
												d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"
												className="box-border"
											/>
										</svg>
									</div>
									<div className="flex h-[60px] w-[60px] items-center justify-center border box-border rounded-lg border-solid md:h-[62px] md:w-[62px] md:min-w-[62px]">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width={24}
											height={24}
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth={2}
											strokeLinecap="round"
											strokeLinejoin="round"
											className="h-6 w-6 block align-middle box-border"
										>
											<path
												d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
												className="box-border"
											/>
											<path
												d="M14 2v4a2 2 0 0 0 2 2h4"
												className="box-border"
											/>
										</svg>
									</div>
									<div className="flex h-[60px] w-[60px] items-center justify-center border box-border rounded-lg border-solid md:h-[62px] md:w-[62px] md:min-w-[62px]">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width={24}
											height={24}
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth={2}
											strokeLinecap="round"
											strokeLinejoin="round"
											className="h-6 w-6 block align-middle box-border"
										>
											<path
												d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"
												className="box-border"
											/>
											<rect
												x={2}
												y={6}
												width={14}
												height={12}
												rx={2}
												className="box-border"
											/>
										</svg>
									</div>
								</div>
								<div className="flex flex-col gap-2 box-border ml-2">
									<div className="flex h-[60px] w-[60px] items-center justify-center border box-border rounded-lg border-solid md:h-[62px] md:w-[62px] md:min-w-[62px]">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width={24}
											height={24}
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth={2}
											strokeLinecap="round"
											strokeLinejoin="round"
											className="h-6 w-6 block align-middle box-border"
										>
											<rect
												width={18}
												height={18}
												x={3}
												y={3}
												rx={2}
												ry={2}
												className="box-border"
											/>
											<circle
												cx={9}
												cy={9}
												r={2}
												className="box-border"
											/>
											<path
												d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"
												className="box-border"
											/>
										</svg>
									</div>
									<div className="flex h-[60px] w-[60px] items-center justify-center border box-border rounded-lg border-solid md:h-[62px] md:w-[62px] md:min-w-[62px]">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width={24}
											height={24}
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth={2}
											strokeLinecap="round"
											strokeLinejoin="round"
											className="h-6 w-6 block align-middle box-border"
										>
											<path
												d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
												className="box-border"
											/>
											<path
												d="M14 2v4a2 2 0 0 0 2 2h4"
												className="box-border"
											/>
										</svg>
									</div>
									<div className="flex h-[60px] w-[60px] items-center justify-center border box-border rounded-lg border-solid md:h-[62px] md:w-[62px] md:min-w-[62px]">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width={24}
											height={24}
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth={2}
											strokeLinecap="round"
											strokeLinejoin="round"
											className="h-6 w-6 block align-middle box-border"
										>
											<path
												d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"
												className="box-border"
											/>
											<rect
												x={2}
												y={6}
												width={14}
												height={12}
												rx={2}
												className="box-border"
											/>
										</svg>
									</div>
								</div>
								<div className="flex flex-col gap-2 box-border ml-2">
									<div className="flex h-[60px] w-[60px] items-center justify-center border box-border rounded-lg border-solid md:h-[62px] md:w-[62px] md:min-w-[62px]">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width={24}
											height={24}
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth={2}
											strokeLinecap="round"
											strokeLinejoin="round"
											className="h-6 w-6 block align-middle box-border"
										>
											<rect
												width={18}
												height={18}
												x={3}
												y={3}
												rx={2}
												ry={2}
												className="box-border"
											/>
											<circle
												cx={9}
												cy={9}
												r={2}
												className="box-border"
											/>
											<path
												d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"
												className="box-border"
											/>
										</svg>
									</div>
									<div className="flex h-[60px] w-[60px] items-center justify-center border box-border rounded-lg border-solid md:h-[62px] md:w-[62px] md:min-w-[62px]">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width={24}
											height={24}
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth={2}
											strokeLinecap="round"
											strokeLinejoin="round"
											className="h-6 w-6 block align-middle box-border"
										>
											<path
												d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
												className="box-border"
											/>
											<path
												d="M14 2v4a2 2 0 0 0 2 2h4"
												className="box-border"
											/>
										</svg>
									</div>
									<div className="flex h-[60px] w-[60px] items-center justify-center border box-border rounded-lg border-solid md:h-[62px] md:w-[62px] md:min-w-[62px]">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width={24}
											height={24}
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth={2}
											strokeLinecap="round"
											strokeLinejoin="round"
											className="h-6 w-6 block align-middle box-border"
										>
											<path
												d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"
												className="box-border"
											/>
											<rect
												x={2}
												y={6}
												width={14}
												height={12}
												rx={2}
												className="box-border"
											/>
										</svg>
									</div>
								</div>
								<div className="flex flex-col gap-2 box-border ml-2">
									<div className="flex h-[60px] w-[60px] items-center justify-center border box-border rounded-lg border-solid md:h-[62px] md:w-[62px] md:min-w-[62px]">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width={24}
											height={24}
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth={2}
											strokeLinecap="round"
											strokeLinejoin="round"
											className="h-6 w-6 block align-middle box-border"
										>
											<rect
												width={18}
												height={18}
												x={3}
												y={3}
												rx={2}
												ry={2}
												className="box-border"
											/>
											<circle
												cx={9}
												cy={9}
												r={2}
												className="box-border"
											/>
											<path
												d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"
												className="box-border"
											/>
										</svg>
									</div>
									<div className="flex h-[60px] w-[60px] items-center justify-center border box-border rounded-lg border-solid md:h-[62px] md:w-[62px] md:min-w-[62px]">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width={24}
											height={24}
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth={2}
											strokeLinecap="round"
											strokeLinejoin="round"
											className="h-6 w-6 block align-middle box-border"
										>
											<path
												d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
												className="box-border"
											/>
											<path
												d="M14 2v4a2 2 0 0 0 2 2h4"
												className="box-border"
											/>
										</svg>
									</div>
									<div className="flex h-[60px] w-[60px] items-center justify-center border box-border rounded-lg border-solid md:h-[62px] md:w-[62px] md:min-w-[62px]">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width={24}
											height={24}
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth={2}
											strokeLinecap="round"
											strokeLinejoin="round"
											className="h-6 w-6 block align-middle box-border"
										>
											<path
												d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"
												className="box-border"
											/>
											<rect
												x={2}
												y={6}
												width={14}
												height={12}
												rx={2}
												className="box-border"
											/>
										</svg>
									</div>
								</div>
								<div className="flex flex-col gap-2 box-border ml-2">
									<div className="flex h-[60px] w-[60px] items-center justify-center border box-border rounded-lg border-solid md:h-[62px] md:w-[62px] md:min-w-[62px]">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width={24}
											height={24}
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth={2}
											strokeLinecap="round"
											strokeLinejoin="round"
											className="h-6 w-6 block align-middle box-border"
										>
											<rect
												width={18}
												height={18}
												x={3}
												y={3}
												rx={2}
												ry={2}
												className="box-border"
											/>
											<circle
												cx={9}
												cy={9}
												r={2}
												className="box-border"
											/>
											<path
												d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"
												className="box-border"
											/>
										</svg>
									</div>
									<div className="flex h-[60px] w-[60px] items-center justify-center border box-border rounded-lg border-solid md:h-[62px] md:w-[62px] md:min-w-[62px]">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width={24}
											height={24}
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth={2}
											strokeLinecap="round"
											strokeLinejoin="round"
											className="h-6 w-6 block align-middle box-border"
										>
											<path
												d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
												className="box-border"
											/>
											<path
												d="M14 2v4a2 2 0 0 0 2 2h4"
												className="box-border"
											/>
										</svg>
									</div>
									<div className="flex h-[60px] w-[60px] items-center justify-center border box-border rounded-lg border-solid md:h-[62px] md:w-[62px] md:min-w-[62px]">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width={24}
											height={24}
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth={2}
											strokeLinecap="round"
											strokeLinejoin="round"
											className="h-6 w-6 block align-middle box-border"
										>
											<path
												d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"
												className="box-border"
											/>
											<rect
												x={2}
												y={6}
												width={14}
												height={12}
												rx={2}
												className="box-border"
											/>
										</svg>
									</div>
								</div>
								<div className="flex flex-col gap-2 box-border ml-2">
									<div className="flex h-[60px] w-[60px] items-center justify-center border box-border rounded-lg border-solid md:h-[62px] md:w-[62px] md:min-w-[62px]">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width={24}
											height={24}
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth={2}
											strokeLinecap="round"
											strokeLinejoin="round"
											className="h-6 w-6 block align-middle box-border"
										>
											<rect
												width={18}
												height={18}
												x={3}
												y={3}
												rx={2}
												ry={2}
												className="box-border"
											/>
											<circle
												cx={9}
												cy={9}
												r={2}
												className="box-border"
											/>
											<path
												d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"
												className="box-border"
											/>
										</svg>
									</div>
									<div className="flex h-[60px] w-[60px] items-center justify-center border box-border rounded-lg border-solid md:h-[62px] md:w-[62px] md:min-w-[62px]">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width={24}
											height={24}
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth={2}
											strokeLinecap="round"
											strokeLinejoin="round"
											className="h-6 w-6 block align-middle box-border"
										>
											<path
												d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
												className="box-border"
											/>
											<path
												d="M14 2v4a2 2 0 0 0 2 2h4"
												className="box-border"
											/>
										</svg>
									</div>
									<div className="flex h-[60px] w-[60px] items-center justify-center border box-border rounded-lg border-solid md:h-[62px] md:w-[62px] md:min-w-[62px]">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width={24}
											height={24}
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth={2}
											strokeLinecap="round"
											strokeLinejoin="round"
											className="h-6 w-6 block align-middle box-border"
										>
											<path
												d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"
												className="box-border"
											/>
											<rect
												x={2}
												y={6}
												width={14}
												height={12}
												rx={2}
												className="box-border"
											/>
										</svg>
									</div>
								</div>
								<div className="flex flex-col gap-2 box-border ml-2">
									<div className="flex h-[60px] w-[60px] items-center justify-center border box-border rounded-lg border-solid md:h-[62px] md:w-[62px] md:min-w-[62px]">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width={24}
											height={24}
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth={2}
											strokeLinecap="round"
											strokeLinejoin="round"
											className="h-6 w-6 block align-middle box-border"
										>
											<rect
												width={18}
												height={18}
												x={3}
												y={3}
												rx={2}
												ry={2}
												className="box-border"
											/>
											<circle
												cx={9}
												cy={9}
												r={2}
												className="box-border"
											/>
											<path
												d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"
												className="box-border"
											/>
										</svg>
									</div>
									<div className="flex h-[60px] w-[60px] items-center justify-center border box-border rounded-lg border-solid md:h-[62px] md:w-[62px] md:min-w-[62px]">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width={24}
											height={24}
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth={2}
											strokeLinecap="round"
											strokeLinejoin="round"
											className="h-6 w-6 block align-middle box-border"
										>
											<path
												d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
												className="box-border"
											/>
											<path
												d="M14 2v4a2 2 0 0 0 2 2h4"
												className="box-border"
											/>
										</svg>
									</div>
									<div className="flex h-[60px] w-[60px] items-center justify-center border box-border rounded-lg border-solid md:h-[62px] md:w-[62px] md:min-w-[62px]">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width={24}
											height={24}
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth={2}
											strokeLinecap="round"
											strokeLinejoin="round"
											className="h-6 w-6 block align-middle box-border"
										>
											<path
												d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"
												className="box-border"
											/>
											<rect
												x={2}
												y={6}
												width={14}
												height={12}
												rx={2}
												className="box-border"
											/>
										</svg>
									</div>
								</div>
								<div className="flex flex-col gap-2 box-border ml-2">
									<div className="flex h-[60px] w-[60px] items-center justify-center border box-border rounded-lg border-solid md:h-[62px] md:w-[62px] md:min-w-[62px]">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width={24}
											height={24}
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth={2}
											strokeLinecap="round"
											strokeLinejoin="round"
											className="h-6 w-6 block align-middle box-border"
										>
											<rect
												width={18}
												height={18}
												x={3}
												y={3}
												rx={2}
												ry={2}
												className="box-border"
											/>
											<circle
												cx={9}
												cy={9}
												r={2}
												className="box-border"
											/>
											<path
												d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"
												className="box-border"
											/>
										</svg>
									</div>
									<div className="flex h-[60px] w-[60px] items-center justify-center border box-border rounded-lg border-solid md:h-[62px] md:w-[62px] md:min-w-[62px]">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width={24}
											height={24}
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth={2}
											strokeLinecap="round"
											strokeLinejoin="round"
											className="h-6 w-6 block align-middle box-border"
										>
											<path
												d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
												className="box-border"
											/>
											<path
												d="M14 2v4a2 2 0 0 0 2 2h4"
												className="box-border"
											/>
										</svg>
									</div>
									<div className="flex h-[60px] w-[60px] items-center justify-center border box-border rounded-lg border-solid md:h-[62px] md:w-[62px] md:min-w-[62px]">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width={24}
											height={24}
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth={2}
											strokeLinecap="round"
											strokeLinejoin="round"
											className="h-6 w-6 block align-middle box-border"
										>
											<path
												d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"
												className="box-border"
											/>
											<rect
												x={2}
												y={6}
												width={14}
												height={12}
												rx={2}
												className="box-border"
											/>
										</svg>
									</div>
								</div>
								<div className="flex flex-col gap-2 box-border ml-2">
									<div className="flex h-[60px] w-[60px] items-center justify-center border box-border rounded-lg border-solid md:h-[62px] md:w-[62px] md:min-w-[62px]">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width={24}
											height={24}
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth={2}
											strokeLinecap="round"
											strokeLinejoin="round"
											className="h-6 w-6 block align-middle box-border"
										>
											<rect
												width={18}
												height={18}
												x={3}
												y={3}
												rx={2}
												ry={2}
												className="box-border"
											/>
											<circle
												cx={9}
												cy={9}
												r={2}
												className="box-border"
											/>
											<path
												d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"
												className="box-border"
											/>
										</svg>
									</div>
									<div className="flex h-[60px] w-[60px] items-center justify-center border box-border rounded-lg border-solid md:h-[62px] md:w-[62px] md:min-w-[62px]">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width={24}
											height={24}
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth={2}
											strokeLinecap="round"
											strokeLinejoin="round"
											className="h-6 w-6 block align-middle box-border"
										>
											<path
												d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
												className="box-border"
											/>
											<path
												d="M14 2v4a2 2 0 0 0 2 2h4"
												className="box-border"
											/>
										</svg>
									</div>
									<div className="flex h-[60px] w-[60px] items-center justify-center border box-border rounded-lg border-solid md:h-[62px] md:w-[62px] md:min-w-[62px]">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width={24}
											height={24}
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth={2}
											strokeLinecap="round"
											strokeLinejoin="round"
											className="h-6 w-6 block align-middle box-border"
										>
											<path
												d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"
												className="box-border"
											/>
											<rect
												x={2}
												y={6}
												width={14}
												height={12}
												rx={2}
												className="box-border"
											/>
										</svg>
									</div>
								</div>
								<div className="flex flex-col gap-2 box-border ml-2">
									<div className="flex h-[60px] w-[60px] items-center justify-center border box-border rounded-lg border-solid md:h-[62px] md:w-[62px] md:min-w-[62px]">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width={24}
											height={24}
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth={2}
											strokeLinecap="round"
											strokeLinejoin="round"
											className="h-6 w-6 block align-middle box-border"
										>
											<rect
												width={18}
												height={18}
												x={3}
												y={3}
												rx={2}
												ry={2}
												className="box-border"
											/>
											<circle
												cx={9}
												cy={9}
												r={2}
												className="box-border"
											/>
											<path
												d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"
												className="box-border"
											/>
										</svg>
									</div>
									<div className="flex h-[60px] w-[60px] items-center justify-center border box-border rounded-lg border-solid md:h-[62px] md:w-[62px] md:min-w-[62px]">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width={24}
											height={24}
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth={2}
											strokeLinecap="round"
											strokeLinejoin="round"
											className="h-6 w-6 block align-middle box-border"
										>
											<path
												d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
												className="box-border"
											/>
											<path
												d="M14 2v4a2 2 0 0 0 2 2h4"
												className="box-border"
											/>
										</svg>
									</div>
									<div className="flex h-[60px] w-[60px] items-center justify-center border box-border rounded-lg border-solid md:h-[62px] md:w-[62px] md:min-w-[62px]">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width={24}
											height={24}
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth={2}
											strokeLinecap="round"
											strokeLinejoin="round"
											className="h-6 w-6 block align-middle box-border"
										>
											<path
												d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"
												className="box-border"
											/>
											<rect
												x={2}
												y={6}
												width={14}
												height={12}
												rx={2}
												className="box-border"
											/>
										</svg>
									</div>
								</div>
							</div>
							<div className="relative z-10 flex h-full w-auto animate-[35s_linear_0s_infinite_normal_none_paused_marquee] items-end transition-transform ease-in-out duration-[0.15s] will-change-transform box-border pb-4 left-0">
								<div className="flex flex-col gap-2 box-border ml-2">
									<div className="flex h-[60px] w-[60px] items-center justify-center border box-border rounded-lg border-solid md:h-[62px] md:w-[62px] md:min-w-[62px]">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width={24}
											height={24}
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth={2}
											strokeLinecap="round"
											strokeLinejoin="round"
											className="h-6 w-6 block align-middle box-border"
										>
											<rect
												width={18}
												height={18}
												x={3}
												y={3}
												rx={2}
												ry={2}
												className="box-border"
											/>
											<circle
												cx={9}
												cy={9}
												r={2}
												className="box-border"
											/>
											<path
												d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"
												className="box-border"
											/>
										</svg>
									</div>
									<div className="flex h-[60px] w-[60px] items-center justify-center border box-border rounded-lg border-solid md:h-[62px] md:w-[62px] md:min-w-[62px]">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width={24}
											height={24}
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth={2}
											strokeLinecap="round"
											strokeLinejoin="round"
											className="h-6 w-6 block align-middle box-border"
										>
											<path
												d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
												className="box-border"
											/>
											<path
												d="M14 2v4a2 2 0 0 0 2 2h4"
												className="box-border"
											/>
										</svg>
									</div>
									<div className="flex h-[60px] w-[60px] items-center justify-center border box-border rounded-lg border-solid md:h-[62px] md:w-[62px] md:min-w-[62px]">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width={24}
											height={24}
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth={2}
											strokeLinecap="round"
											strokeLinejoin="round"
											className="h-6 w-6 block align-middle box-border"
										>
											<path
												d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"
												className="box-border"
											/>
											<rect
												x={2}
												y={6}
												width={14}
												height={12}
												rx={2}
												className="box-border"
											/>
										</svg>
									</div>
								</div>
								<div className="flex flex-col gap-2 box-border ml-2">
									<div className="flex h-[60px] w-[60px] items-center justify-center border box-border rounded-lg border-solid md:h-[62px] md:w-[62px] md:min-w-[62px]">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width={24}
											height={24}
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth={2}
											strokeLinecap="round"
											strokeLinejoin="round"
											className="h-6 w-6 block align-middle box-border"
										>
											<rect
												width={18}
												height={18}
												x={3}
												y={3}
												rx={2}
												ry={2}
												className="box-border"
											/>
											<circle
												cx={9}
												cy={9}
												r={2}
												className="box-border"
											/>
											<path
												d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"
												className="box-border"
											/>
										</svg>
									</div>
									<div className="flex h-[60px] w-[60px] items-center justify-center border box-border rounded-lg border-solid md:h-[62px] md:w-[62px] md:min-w-[62px]">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width={24}
											height={24}
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth={2}
											strokeLinecap="round"
											strokeLinejoin="round"
											className="h-6 w-6 block align-middle box-border"
										>
											<path
												d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
												className="box-border"
											/>
											<path
												d="M14 2v4a2 2 0 0 0 2 2h4"
												className="box-border"
											/>
										</svg>
									</div>
									<div className="flex h-[60px] w-[60px] items-center justify-center border box-border rounded-lg border-solid md:h-[62px] md:w-[62px] md:min-w-[62px]">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width={24}
											height={24}
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth={2}
											strokeLinecap="round"
											strokeLinejoin="round"
											className="h-6 w-6 block align-middle box-border"
										>
											<path
												d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"
												className="box-border"
											/>
											<rect
												x={2}
												y={6}
												width={14}
												height={12}
												rx={2}
												className="box-border"
											/>
										</svg>
									</div>
								</div>
								<div className="flex flex-col gap-2 box-border ml-2">
									<div className="flex h-[60px] w-[60px] items-center justify-center border box-border rounded-lg border-solid md:h-[62px] md:w-[62px] md:min-w-[62px]">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width={24}
											height={24}
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth={2}
											strokeLinecap="round"
											strokeLinejoin="round"
											className="h-6 w-6 block align-middle box-border"
										>
											<rect
												width={18}
												height={18}
												x={3}
												y={3}
												rx={2}
												ry={2}
												className="box-border"
											/>
											<circle
												cx={9}
												cy={9}
												r={2}
												className="box-border"
											/>
											<path
												d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"
												className="box-border"
											/>
										</svg>
									</div>
									<div className="flex h-[60px] w-[60px] items-center justify-center border box-border rounded-lg border-solid md:h-[62px] md:w-[62px] md:min-w-[62px]">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width={24}
											height={24}
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth={2}
											strokeLinecap="round"
											strokeLinejoin="round"
											className="h-6 w-6 block align-middle box-border"
										>
											<path
												d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
												className="box-border"
											/>
											<path
												d="M14 2v4a2 2 0 0 0 2 2h4"
												className="box-border"
											/>
										</svg>
									</div>
									<div className="flex h-[60px] w-[60px] items-center justify-center border box-border rounded-lg border-solid md:h-[62px] md:w-[62px] md:min-w-[62px]">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width={24}
											height={24}
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth={2}
											strokeLinecap="round"
											strokeLinejoin="round"
											className="h-6 w-6 block align-middle box-border"
										>
											<path
												d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"
												className="box-border"
											/>
											<rect
												x={2}
												y={6}
												width={14}
												height={12}
												rx={2}
												className="box-border"
											/>
										</svg>
									</div>
								</div>
								<div className="flex flex-col gap-2 box-border ml-2">
									<div className="flex h-[60px] w-[60px] items-center justify-center border box-border rounded-lg border-solid md:h-[62px] md:w-[62px] md:min-w-[62px]">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width={24}
											height={24}
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth={2}
											strokeLinecap="round"
											strokeLinejoin="round"
											className="h-6 w-6 block align-middle box-border"
										>
											<rect
												width={18}
												height={18}
												x={3}
												y={3}
												rx={2}
												ry={2}
												className="box-border"
											/>
											<circle
												cx={9}
												cy={9}
												r={2}
												className="box-border"
											/>
											<path
												d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"
												className="box-border"
											/>
										</svg>
									</div>
									<div className="flex h-[60px] w-[60px] items-center justify-center border box-border rounded-lg border-solid md:h-[62px] md:w-[62px] md:min-w-[62px]">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width={24}
											height={24}
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth={2}
											strokeLinecap="round"
											strokeLinejoin="round"
											className="h-6 w-6 block align-middle box-border"
										>
											<path
												d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
												className="box-border"
											/>
											<path
												d="M14 2v4a2 2 0 0 0 2 2h4"
												className="box-border"
											/>
										</svg>
									</div>
									<div className="flex h-[60px] w-[60px] items-center justify-center border box-border rounded-lg border-solid md:h-[62px] md:w-[62px] md:min-w-[62px]">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width={24}
											height={24}
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth={2}
											strokeLinecap="round"
											strokeLinejoin="round"
											className="h-6 w-6 block align-middle box-border"
										>
											<path
												d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"
												className="box-border"
											/>
											<rect
												x={2}
												y={6}
												width={14}
												height={12}
												rx={2}
												className="box-border"
											/>
										</svg>
									</div>
								</div>
								<div className="flex flex-col gap-2 box-border ml-2">
									<div className="flex h-[60px] w-[60px] items-center justify-center border box-border rounded-lg border-solid md:h-[62px] md:w-[62px] md:min-w-[62px]">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width={24}
											height={24}
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth={2}
											strokeLinecap="round"
											strokeLinejoin="round"
											className="h-6 w-6 block align-middle box-border"
										>
											<rect
												width={18}
												height={18}
												x={3}
												y={3}
												rx={2}
												ry={2}
												className="box-border"
											/>
											<circle
												cx={9}
												cy={9}
												r={2}
												className="box-border"
											/>
											<path
												d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"
												className="box-border"
											/>
										</svg>
									</div>
									<div className="flex h-[60px] w-[60px] items-center justify-center border box-border rounded-lg border-solid md:h-[62px] md:w-[62px] md:min-w-[62px]">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width={24}
											height={24}
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth={2}
											strokeLinecap="round"
											strokeLinejoin="round"
											className="h-6 w-6 block align-middle box-border"
										>
											<path
												d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
												className="box-border"
											/>
											<path
												d="M14 2v4a2 2 0 0 0 2 2h4"
												className="box-border"
											/>
										</svg>
									</div>
									<div className="flex h-[60px] w-[60px] items-center justify-center border box-border rounded-lg border-solid md:h-[62px] md:w-[62px] md:min-w-[62px]">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width={24}
											height={24}
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth={2}
											strokeLinecap="round"
											strokeLinejoin="round"
											className="h-6 w-6 block align-middle box-border"
										>
											<path
												d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"
												className="box-border"
											/>
											<rect
												x={2}
												y={6}
												width={14}
												height={12}
												rx={2}
												className="box-border"
											/>
										</svg>
									</div>
								</div>
								<div className="flex flex-col gap-2 box-border ml-2">
									<div className="flex h-[60px] w-[60px] items-center justify-center border box-border rounded-lg border-solid md:h-[62px] md:w-[62px] md:min-w-[62px]">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width={24}
											height={24}
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth={2}
											strokeLinecap="round"
											strokeLinejoin="round"
											className="h-6 w-6 block align-middle box-border"
										>
											<rect
												width={18}
												height={18}
												x={3}
												y={3}
												rx={2}
												ry={2}
												className="box-border"
											/>
											<circle
												cx={9}
												cy={9}
												r={2}
												className="box-border"
											/>
											<path
												d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"
												className="box-border"
											/>
										</svg>
									</div>
									<div className="flex h-[60px] w-[60px] items-center justify-center border box-border rounded-lg border-solid md:h-[62px] md:w-[62px] md:min-w-[62px]">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width={24}
											height={24}
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth={2}
											strokeLinecap="round"
											strokeLinejoin="round"
											className="h-6 w-6 block align-middle box-border"
										>
											<path
												d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
												className="box-border"
											/>
											<path
												d="M14 2v4a2 2 0 0 0 2 2h4"
												className="box-border"
											/>
										</svg>
									</div>
									<div className="flex h-[60px] w-[60px] items-center justify-center border box-border rounded-lg border-solid md:h-[62px] md:w-[62px] md:min-w-[62px]">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width={24}
											height={24}
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth={2}
											strokeLinecap="round"
											strokeLinejoin="round"
											className="h-6 w-6 block align-middle box-border"
										>
											<path
												d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"
												className="box-border"
											/>
											<rect
												x={2}
												y={6}
												width={14}
												height={12}
												rx={2}
												className="box-border"
											/>
										</svg>
									</div>
								</div>
								<div className="flex flex-col gap-2 box-border ml-2">
									<div className="flex h-[60px] w-[60px] items-center justify-center border box-border rounded-lg border-solid md:h-[62px] md:w-[62px] md:min-w-[62px]">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width={24}
											height={24}
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth={2}
											strokeLinecap="round"
											strokeLinejoin="round"
											className="h-6 w-6 block align-middle box-border"
										>
											<rect
												width={18}
												height={18}
												x={3}
												y={3}
												rx={2}
												ry={2}
												className="box-border"
											/>
											<circle
												cx={9}
												cy={9}
												r={2}
												className="box-border"
											/>
											<path
												d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"
												className="box-border"
											/>
										</svg>
									</div>
									<div className="flex h-[60px] w-[60px] items-center justify-center border box-border rounded-lg border-solid md:h-[62px] md:w-[62px] md:min-w-[62px]">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width={24}
											height={24}
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth={2}
											strokeLinecap="round"
											strokeLinejoin="round"
											className="h-6 w-6 block align-middle box-border"
										>
											<path
												d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
												className="box-border"
											/>
											<path
												d="M14 2v4a2 2 0 0 0 2 2h4"
												className="box-border"
											/>
										</svg>
									</div>
									<div className="flex h-[60px] w-[60px] items-center justify-center border box-border rounded-lg border-solid md:h-[62px] md:w-[62px] md:min-w-[62px]">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width={24}
											height={24}
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth={2}
											strokeLinecap="round"
											strokeLinejoin="round"
											className="h-6 w-6 block align-middle box-border"
										>
											<path
												d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"
												className="box-border"
											/>
											<rect
												x={2}
												y={6}
												width={14}
												height={12}
												rx={2}
												className="box-border"
											/>
										</svg>
									</div>
								</div>
								<div className="flex flex-col gap-2 box-border ml-2">
									<div className="flex h-[60px] w-[60px] items-center justify-center border box-border rounded-lg border-solid md:h-[62px] md:w-[62px] md:min-w-[62px]">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width={24}
											height={24}
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth={2}
											strokeLinecap="round"
											strokeLinejoin="round"
											className="h-6 w-6 block align-middle box-border"
										>
											<rect
												width={18}
												height={18}
												x={3}
												y={3}
												rx={2}
												ry={2}
												className="box-border"
											/>
											<circle
												cx={9}
												cy={9}
												r={2}
												className="box-border"
											/>
											<path
												d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"
												className="box-border"
											/>
										</svg>
									</div>
									<div className="flex h-[60px] w-[60px] items-center justify-center border box-border rounded-lg border-solid md:h-[62px] md:w-[62px] md:min-w-[62px]">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width={24}
											height={24}
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth={2}
											strokeLinecap="round"
											strokeLinejoin="round"
											className="h-6 w-6 block align-middle box-border"
										>
											<path
												d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
												className="box-border"
											/>
											<path
												d="M14 2v4a2 2 0 0 0 2 2h4"
												className="box-border"
											/>
										</svg>
									</div>
									<div className="flex h-[60px] w-[60px] items-center justify-center border box-border rounded-lg border-solid md:h-[62px] md:w-[62px] md:min-w-[62px]">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width={24}
											height={24}
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth={2}
											strokeLinecap="round"
											strokeLinejoin="round"
											className="h-6 w-6 block align-middle box-border"
										>
											<path
												d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"
												className="box-border"
											/>
											<rect
												x={2}
												y={6}
												width={14}
												height={12}
												rx={2}
												className="box-border"
											/>
										</svg>
									</div>
								</div>
								<div className="flex flex-col gap-2 box-border ml-2">
									<div className="flex h-[60px] w-[60px] items-center justify-center border box-border rounded-lg border-solid md:h-[62px] md:w-[62px] md:min-w-[62px]">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width={24}
											height={24}
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth={2}
											strokeLinecap="round"
											strokeLinejoin="round"
											className="h-6 w-6 block align-middle box-border"
										>
											<rect
												width={18}
												height={18}
												x={3}
												y={3}
												rx={2}
												ry={2}
												className="box-border"
											/>
											<circle
												cx={9}
												cy={9}
												r={2}
												className="box-border"
											/>
											<path
												d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"
												className="box-border"
											/>
										</svg>
									</div>
									<div className="flex h-[60px] w-[60px] items-center justify-center border box-border rounded-lg border-solid md:h-[62px] md:w-[62px] md:min-w-[62px]">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width={24}
											height={24}
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth={2}
											strokeLinecap="round"
											strokeLinejoin="round"
											className="h-6 w-6 block align-middle box-border"
										>
											<path
												d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
												className="box-border"
											/>
											<path
												d="M14 2v4a2 2 0 0 0 2 2h4"
												className="box-border"
											/>
										</svg>
									</div>
									<div className="flex h-[60px] w-[60px] items-center justify-center border box-border rounded-lg border-solid md:h-[62px] md:w-[62px] md:min-w-[62px]">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width={24}
											height={24}
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth={2}
											strokeLinecap="round"
											strokeLinejoin="round"
											className="h-6 w-6 block align-middle box-border"
										>
											<path
												d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"
												className="box-border"
											/>
											<rect
												x={2}
												y={6}
												width={14}
												height={12}
												rx={2}
												className="box-border"
											/>
										</svg>
									</div>
								</div>
								<div className="flex flex-col gap-2 box-border ml-2">
									<div className="flex h-[60px] w-[60px] items-center justify-center border box-border rounded-lg border-solid md:h-[62px] md:w-[62px] md:min-w-[62px]">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width={24}
											height={24}
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth={2}
											strokeLinecap="round"
											strokeLinejoin="round"
											className="h-6 w-6 block align-middle box-border"
										>
											<rect
												width={18}
												height={18}
												x={3}
												y={3}
												rx={2}
												ry={2}
												className="box-border"
											/>
											<circle
												cx={9}
												cy={9}
												r={2}
												className="box-border"
											/>
											<path
												d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"
												className="box-border"
											/>
										</svg>
									</div>
									<div className="flex h-[60px] w-[60px] items-center justify-center border box-border rounded-lg border-solid md:h-[62px] md:w-[62px] md:min-w-[62px]">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width={24}
											height={24}
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth={2}
											strokeLinecap="round"
											strokeLinejoin="round"
											className="h-6 w-6 block align-middle box-border"
										>
											<path
												d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
												className="box-border"
											/>
											<path
												d="M14 2v4a2 2 0 0 0 2 2h4"
												className="box-border"
											/>
										</svg>
									</div>
									<div className="flex h-[60px] w-[60px] items-center justify-center border box-border rounded-lg border-solid md:h-[62px] md:w-[62px] md:min-w-[62px]">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width={24}
											height={24}
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth={2}
											strokeLinecap="round"
											strokeLinejoin="round"
											className="h-6 w-6 block align-middle box-border"
										>
											<path
												d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"
												className="box-border"
											/>
											<rect
												x={2}
												y={6}
												width={14}
												height={12}
												rx={2}
												className="box-border"
											/>
										</svg>
									</div>
								</div>
							</div>
						</figure>
						<div className="pointer-events-none absolute z-10 h-full w-full opacity-20 box-border inset-0" />
					</div>
				</div>
			</a>
			<a
				href="/realtime"
				className="pointer-events-none relative col-span-6 flex w-full flex-col gap-5 box-border focus:rounded-xl focus:outline-offset-2 focus:shadow-[0_0_#0000,0_0_#0000,var(--tw-shadow,0_0_#0000)] sm:h-[400px] lg:flex-row xl:col-span-3"
			>
				<div className="relative flex h-full w-full items-center justify-center transition-all ease-in-out duration-[0.15s] box-border p-px rounded-lg hover:shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),0_0_#0000] md:rounded-xl">
					<div className="relative z-10 flex h-full w-full flex-1 flex-row items-start justify-between gap-4 overflow-hidden box-border p-4 rounded-[7px] sm:flex-col sm:items-center md:rounded-[11px]">
						<div className="relative z-10 flex h-full w-full flex-col items-start gap-2 text-left box-border mx-auto sm:items-center sm:gap-4 sm:text-center lg:pl-2">
							<div className="flex items-center gap-2 box-border">
								<svg
									width={18}
									height={18}
									viewBox="0 0 25 25"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									className="block align-middle box-border"
								>
									<path
										d="M9.15928 1.94531V5.84117M6.24345 5.84117L2.91385 2.40977M6.24345 8.53673H2.4248M16.7998 16.496L21.9988 15.2019C22.7217 15.022 22.8065 14.0285 22.1246 13.7286L9.73411 8.28034C9.08269 7.99391 8.41873 8.65652 8.70383 9.30851L14.0544 21.5445C14.3518 22.2247 15.341 22.1456 15.5266 21.4269L16.7998 16.496Z"
										stroke="currentColor"
										strokeMiterlimit={10}
										strokeLinejoin="round"
										strokeLinecap="round"
										strokeWidth="1.5"
										className="box-border"
									/>
								</svg>
								<h2 className="box-border text-[24px] m-0 scroll-mt-[90px]">
									Realtime
								</h2>
							</div>
							<div className="flex flex-1 flex-col justify-between gap-2 box-border">
								<p className="text-[21px] leading-5 box-border m-0">
									<strong className="box-border">
										Build multiplayer experiences
									</strong>
									<br className="hidden box-border sm:inline-block" />
									with real-time data synchronization.
								</p>
							</div>
						</div>
						<figure
							role="img"
							aria-label="Supabase Realtime multiplayer app demo"
							className="pointer-events-auto absolute z-0 hidden w-full overflow-hidden box-border m-0 inset-0 sm:block"
						>
							<img
								alt="Supabase Realtime"
								loading="lazy"
								decoding="async"
								data-nimg="fill"
								sizes="100%"
								srcSet="
        /_next/image?url=%2Fimages%2Findex%2Fproducts%2Frealtime-dark.svg&w=16&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6     16w,
        /_next/image?url=%2Fimages%2Findex%2Fproducts%2Frealtime-dark.svg&w=32&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6     32w,
        /_next/image?url=%2Fimages%2Findex%2Fproducts%2Frealtime-dark.svg&w=48&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6     48w,
        /_next/image?url=%2Fimages%2Findex%2Fproducts%2Frealtime-dark.svg&w=64&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6     64w,
        /_next/image?url=%2Fimages%2Findex%2Fproducts%2Frealtime-dark.svg&w=96&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6     96w,
        /_next/image?url=%2Fimages%2Findex%2Fproducts%2Frealtime-dark.svg&w=128&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6   128w,
        /_next/image?url=%2Fimages%2Findex%2Fproducts%2Frealtime-dark.svg&w=256&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6   256w,
        /_next/image?url=%2Fimages%2Findex%2Fproducts%2Frealtime-dark.svg&w=384&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6   384w,
        /_next/image?url=%2Fimages%2Findex%2Fproducts%2Frealtime-dark.svg&w=640&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6   640w,
        /_next/image?url=%2Fimages%2Findex%2Fproducts%2Frealtime-dark.svg&w=750&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6   750w,
        /_next/image?url=%2Fimages%2Findex%2Fproducts%2Frealtime-dark.svg&w=828&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6   828w,
        /_next/image?url=%2Fimages%2Findex%2Fproducts%2Frealtime-dark.svg&w=1080&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6 1080w,
        /_next/image?url=%2Fimages%2Findex%2Fproducts%2Frealtime-dark.svg&w=1200&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6 1200w,
        /_next/image?url=%2Fimages%2Findex%2Fproducts%2Frealtime-dark.svg&w=1920&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6 1920w,
        /_next/image?url=%2Fimages%2Findex%2Fproducts%2Frealtime-dark.svg&w=2048&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6 2048w,
        /_next/image?url=%2Fimages%2Findex%2Fproducts%2Frealtime-dark.svg&w=3840&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6 3840w
      "
								src="https://supabase.com/_next/image?url=%2Fimages%2Findex%2Fproducts%2Frealtime-dark.svg&w=3840&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6"
								className="absolute h-full w-full text-transparent block object-cover align-middle max-w-full box-border inset-0 xl:object-[center_center]"
							/>
							<img
								alt="Supabase Realtime"
								loading="lazy"
								decoding="async"
								data-nimg="fill"
								sizes="100%"
								srcSet="
        /_next/image?url=%2Fimages%2Findex%2Fproducts%2Frealtime-light.svg&w=16&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6     16w,
        /_next/image?url=%2Fimages%2Findex%2Fproducts%2Frealtime-light.svg&w=32&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6     32w,
        /_next/image?url=%2Fimages%2Findex%2Fproducts%2Frealtime-light.svg&w=48&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6     48w,
        /_next/image?url=%2Fimages%2Findex%2Fproducts%2Frealtime-light.svg&w=64&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6     64w,
        /_next/image?url=%2Fimages%2Findex%2Fproducts%2Frealtime-light.svg&w=96&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6     96w,
        /_next/image?url=%2Fimages%2Findex%2Fproducts%2Frealtime-light.svg&w=128&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6   128w,
        /_next/image?url=%2Fimages%2Findex%2Fproducts%2Frealtime-light.svg&w=256&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6   256w,
        /_next/image?url=%2Fimages%2Findex%2Fproducts%2Frealtime-light.svg&w=384&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6   384w,
        /_next/image?url=%2Fimages%2Findex%2Fproducts%2Frealtime-light.svg&w=640&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6   640w,
        /_next/image?url=%2Fimages%2Findex%2Fproducts%2Frealtime-light.svg&w=750&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6   750w,
        /_next/image?url=%2Fimages%2Findex%2Fproducts%2Frealtime-light.svg&w=828&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6   828w,
        /_next/image?url=%2Fimages%2Findex%2Fproducts%2Frealtime-light.svg&w=1080&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6 1080w,
        /_next/image?url=%2Fimages%2Findex%2Fproducts%2Frealtime-light.svg&w=1200&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6 1200w,
        /_next/image?url=%2Fimages%2Findex%2Fproducts%2Frealtime-light.svg&w=1920&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6 1920w,
        /_next/image?url=%2Fimages%2Findex%2Fproducts%2Frealtime-light.svg&w=2048&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6 2048w,
        /_next/image?url=%2Fimages%2Findex%2Fproducts%2Frealtime-light.svg&w=3840&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6 3840w
      "
								src="https://supabase.com/_next/image?url=%2Fimages%2Findex%2Fproducts%2Frealtime-light.svg&w=3840&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6"
								className="absolute h-full w-full text-transparent hidden object-cover align-middle max-w-full box-border inset-0 xl:object-[center_center]"
							/>
							<div className="absolute translate-x-0 translate-y-0 -translate-x-2/4 -translate-y-2/4 transition-transform duration-[0.75s] ease-[ease-out] will-change-transform box-border left-[30%] top-[60%]">
								<svg
									width={30}
									height={38}
									viewBox="0 0 30 38"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									className="block align-middle box-border"
								>
									<path
										d="M3.58385 1.69742C2.57836 0.865603 1.05859 1.58076 1.05859 2.88572V35.6296C1.05859 37.1049 2.93111 37.7381 3.8265 36.5656L12.5863 25.0943C12.6889 24.96 12.8483 24.8812 13.0173 24.8812H27.3245C28.7697 24.8812 29.4211 23.0719 28.3076 22.1507L3.58385 1.69742Z"
										fill="hsl(var(--background-surface-200))"
										stroke="hsl(var(--foreground-lighter))"
										strokeLinejoin="round"
										className="box-border"
									/>
								</svg>
								<div className="absolute flex items-center justify-center gap-1 border box-border rounded-full border-solid left-full -top-6">
									<div className="h-1.5 w-1.5 animate-[0.6s_cubic-bezier(0.4,0,0.6,1)_0s_infinite_normal_none_paused_pulse] box-border rounded-full" />
									<div className="h-1.5 w-1.5 animate-[0.6s_cubic-bezier(0.4,0,0.6,1)_0.2s_infinite_normal_none_paused_pulse] box-border rounded-full" />
									<div className="h-1.5 w-1.5 animate-[0.6s_cubic-bezier(0.4,0,0.6,1)_0.4s_infinite_normal_none_paused_pulse] box-border rounded-full" />
								</div>
							</div>
							<div className="absolute translate-x-0 translate-y-0 -translate-x-2/4 -translate-y-2/4 transition-transform duration-[1s] ease-[ease-out] will-change-transform box-border left-[65%] top-[80%]">
								<svg
									width={20}
									height={28}
									viewBox="0 0 30 38"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									className="block align-middle box-border"
								>
									<path
										d="M3.58385 1.69742C2.57836 0.865603 1.05859 1.58076 1.05859 2.88572V35.6296C1.05859 37.1049 2.93111 37.7381 3.8265 36.5656L12.5863 25.0943C12.6889 24.96 12.8483 24.8812 13.0173 24.8812H27.3245C28.7697 24.8812 29.4211 23.0719 28.3076 22.1507L3.58385 1.69742Z"
										fill="hsl(var(--background-surface-200))"
										stroke="hsl(var(--foreground-lighter))"
										strokeLinejoin="round"
										className="box-border"
									/>
								</svg>
								<div className="absolute flex items-center justify-center gap-1 border opacity-0 transition-opacity ease-in-out duration-[0.15s] box-border rounded-full border-solid left-full -top-6">
									<div className="h-1.5 w-1.5 animate-[0.6s_cubic-bezier(0.4,0,0.6,1)_0s_infinite_normal_none_paused_pulse] box-border rounded-full" />
									<div className="h-1.5 w-1.5 animate-[0.6s_cubic-bezier(0.4,0,0.6,1)_0.2s_infinite_normal_none_paused_pulse] box-border rounded-full" />
									<div className="h-1.5 w-1.5 animate-[0.6s_cubic-bezier(0.4,0,0.6,1)_0.4s_infinite_normal_none_paused_pulse] box-border rounded-full" />
								</div>
							</div>
							<div className="absolute translate-x-0 translate-y-0 -translate-x-2/4 -translate-y-2/4 h-1 w-1 opacity-0 transition-opacity ease-in-out duration-[0.15s] delay-0 will-change-transform box-border left-0 top-0">
								<div className="absolute flex h-auto w-auto items-center justify-center gap-1 border box-border px-2.5 py-1.5 rounded-full border-solid left-full -top-6">
									<div className="h-1.5 w-1.5 animate-[0.6s_cubic-bezier(0.4,0,0.6,1)_0s_infinite_normal_none_paused_pulse] box-border rounded-full" />
									<div className="h-1.5 w-1.5 animate-[0.6s_cubic-bezier(0.4,0,0.6,1)_0.2s_infinite_normal_none_paused_pulse] box-border rounded-full" />
									<div className="h-1.5 w-1.5 animate-[0.6s_cubic-bezier(0.4,0,0.6,1)_0.4s_infinite_normal_none_paused_pulse] box-border rounded-full" />
								</div>
							</div>
							<div className="pointer-events-none absolute h-full max-h-[400px] w-full box-border inset-[auto_0px_0px] lg:max-h-none" />
						</figure>
						<div className="pointer-events-none absolute z-10 h-full w-full opacity-20 box-border inset-0" />
					</div>
				</div>
			</a>
			<a
				href="/modules/vector"
				className="relative col-span-6 flex w-full flex-col gap-5 box-border focus:rounded-xl focus:outline-offset-2 focus:shadow-[0_0_#0000,0_0_#0000,var(--tw-shadow,0_0_#0000)] sm:h-[400px] lg:flex-row xl:col-span-3"
			>
				<div className="relative flex h-full w-full items-center justify-center transition-all ease-in-out duration-[0.15s] box-border p-px rounded-lg hover:shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),0_0_#0000] md:rounded-xl">
					<div className="relative z-10 flex h-full w-full flex-1 flex-row items-start justify-between gap-4 overflow-hidden box-border p-4 rounded-[7px] sm:flex-col sm:items-center md:rounded-[11px]">
						<div className="relative z-10 flex h-full w-full flex-col items-start gap-2 text-left box-border mx-auto sm:items-center sm:gap-4 sm:text-center lg:pl-2">
							<div className="flex items-center gap-2 box-border">
								<svg
									width={18}
									height={18}
									viewBox="0 0 25 25"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									className="block align-middle box-border"
								>
									<path
										d="M11.9983 11.4482V21.7337M11.9983 11.4482L21.0732 6.17699M11.9983 11.4482L2.92383 6.17723M2.92383 6.17723V12.4849M2.92383 6.17723V6.1232L8.35978 2.9657M21.0736 12.54V6.1232L15.6376 2.9657M17.7247 18.6107L11.9987 21.9367L6.27265 18.6107"
										stroke="currentColor"
										strokeMiterlimit={10}
										strokeLinejoin="round"
										strokeLinecap="round"
										strokeWidth="1.5"
										className="box-border"
									/>
								</svg>
								<h2 className="box-border text-[24px] m-0 scroll-mt-[90px]">
									Vector
								</h2>
							</div>
							<div className="flex flex-1 flex-col justify-between gap-2 box-border">
								<p className="text-[21px] leading-5 box-border m-0">
									Integrate your favorite ML-models to
									<br className="hidden box-border sm:inline-block" />
									<strong className="box-border">
										store, index and search vector
										embeddings
									</strong>
									.
								</p>
								<span className="hidden box-border lg:block">
									<ul className="flex flex-col gap-1 text-sm leading-5 box-border">
										<li className="flex items-center gap-2 box-border">
											<svg
												role="img"
												width={24}
												height={25}
												viewBox="0 0 24 25"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
												className="block align-middle box-border"
											>
												<title className="box-border">
													OpenAI logo
												</title>
												<path
													d="M19.7082 11.2701C20.1166 10.0449 19.9764 8.70392 19.3242 7.58845C18.3429 5.88172 16.3679 5.00397 14.4418 5.41237C13.5823 4.44928 12.351 3.90069 11.0588 3.90679C9.08995 3.90679 7.34055 5.17464 6.73101 7.04595C5.46315 7.30806 4.37206 8.10047 3.73204 9.22203C2.74458 10.9288 2.97011 13.0744 4.29282 14.5373C3.88443 15.7625 4.02462 17.1035 4.67684 18.2128C5.65821 19.9257 7.63314 20.8034 9.5654 20.395C10.4188 21.3581 11.65 21.9128 12.9423 21.9067C14.9111 21.9067 16.6605 20.6388 17.2701 18.7675C18.5379 18.5054 19.629 17.713 20.2629 16.5914C21.2565 14.8847 21.031 12.7391 19.7082 11.2762V11.2701ZM18.3063 8.17971C18.6964 8.8624 18.8427 9.6609 18.7086 10.435C18.6842 10.4167 18.6354 10.3924 18.605 10.3741L15.0208 8.30162C14.838 8.19799 14.6124 8.19799 14.4296 8.30162L10.2298 10.7276V8.94774L13.6981 6.94233C15.3134 6.00972 17.3737 6.56441 18.3063 8.17971ZM10.2298 11.8797L11.9975 10.8556L13.7652 11.8797V13.9216L11.9975 14.9457L10.2298 13.9216V11.8797ZM11.0527 5.08321C11.8451 5.08321 12.607 5.35751 13.2166 5.86343C13.1922 5.87562 13.1434 5.9061 13.1069 5.92439L9.52273 7.99075C9.33987 8.09437 9.23015 8.28943 9.23015 8.50277V13.3548L7.68799 12.4648V8.454C7.68799 6.58879 9.19357 5.08321 11.0588 5.07712L11.0527 5.08321ZM4.75608 9.81329C5.15228 9.1306 5.76792 8.60639 6.51157 8.33209V12.5928C6.51157 12.8062 6.62129 12.9951 6.80415 13.1048L10.9978 15.5247L9.44958 16.4208L5.98736 14.4215C4.37816 13.4889 3.82347 11.4286 4.75608 9.81329ZM5.70087 17.6338C5.30467 16.9572 5.16447 16.1526 5.29857 15.3784C5.32296 15.3967 5.37172 15.4211 5.4022 15.4394L8.98633 17.5119C9.16919 17.6155 9.39472 17.6155 9.57759 17.5119L13.7713 15.0859V16.8657L10.3029 18.8651C8.68765 19.7916 6.62738 19.243 5.69478 17.6338H5.70087ZM12.9484 20.7303C12.1621 20.7303 11.394 20.456 10.7906 19.95C10.815 19.9379 10.8698 19.9074 10.9003 19.8891L14.4844 17.8227C14.6673 17.7191 14.7831 17.524 14.777 17.3107V12.4648L16.3192 13.3548V17.3595C16.3192 19.2247 14.8075 20.7364 12.9484 20.7364V20.7303ZM19.2511 16.0002C18.8549 16.6829 18.2331 17.2071 17.4956 17.4753V13.2146C17.4956 13.0012 17.3859 12.8062 17.203 12.7025L13.0032 10.2765L14.5454 9.38661L18.0137 11.3859C19.629 12.3185 20.1776 14.3788 19.245 15.9941L19.2511 16.0002Z"
													fill="currentColor"
													className="box-border"
												/>
											</svg>
											<span className="box-border">
												OpenAI
											</span>
										</li>
										<li className="flex items-center gap-2 box-border">
											<svg
												width={24}
												height={25}
												viewBox="0 0 24 25"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
												className="block align-middle box-border"
											>
												<title className="box-border">
													Hugging Face logo
												</title>
												<path
													d="M14.5063 9.99415C14.6241 10.0358 14.7118 10.1627 14.7951 10.2834C14.9078 10.4466 15.0127 10.5984 15.1736 10.5128C15.7037 10.2309 15.905 9.57264 15.6231 9.04248C15.3412 8.51234 14.6829 8.31108 14.1527 8.59297C13.6226 8.87486 13.4213 9.53316 13.7032 10.0633C13.7778 10.2036 13.9432 10.1374 14.1179 10.0675C14.2548 10.0127 14.3974 9.95571 14.5063 9.99415Z"
													fill="currentColor"
													className="box-border"
												/>
												<path
													d="M9.09514 10.2834C9.17851 10.1627 9.26617 10.0358 9.38402 9.99415C9.49288 9.95571 9.63547 10.0127 9.77241 10.0675C9.94706 10.1374 10.1125 10.2036 10.1871 10.0633C10.469 9.53316 10.2677 8.87486 9.73755 8.59297C9.20739 8.31108 8.54909 8.51234 8.2672 9.04248C7.98531 9.57264 8.18657 10.2309 8.71673 10.5128C8.87762 10.5984 8.98246 10.4466 9.09514 10.2834Z"
													fill="currentColor"
													className="box-border"
												/>
												<path
													d="M17.161 11.018C17.5512 11.018 17.8676 10.7016 17.8676 10.3113C17.8676 9.92101 17.5512 9.60461 17.161 9.60461C16.7706 9.60461 16.4543 9.92101 16.4543 10.3113C16.4543 10.7016 16.7706 11.018 17.161 11.018Z"
													fill="currentColor"
													className="box-border"
												/>
												<path
													d="M7.75666 10.3113C7.75666 10.7016 7.44026 11.018 7.04997 11.018C6.65967 11.018 6.34329 10.7016 6.34329 10.3113C6.34329 9.92101 6.65967 9.60461 7.04997 9.60461C7.44026 9.60461 7.75666 9.92101 7.75666 10.3113Z"
													fill="currentColor"
													className="box-border"
												/>
												<path
													fillRule="evenodd"
													clipRule="evenodd"
													d="M10.2643 11.867C10.7827 12.123 11.3674 12.4118 11.9967 12.4118C12.6281 12.4118 13.2188 12.1198 13.7412 11.8612C13.8755 11.7946 14.0128 11.7271 14.1376 11.6754C14.2558 11.6264 14.4041 11.5735 14.555 11.5634C14.723 11.5521 14.9473 11.5939 15.1049 11.7968C15.2359 11.9654 15.2584 12.172 15.2584 12.3283C15.2584 12.9001 15.062 13.7136 14.5621 14.3945C14.0482 15.0944 13.2161 15.6471 11.9967 15.6471C10.7774 15.6471 9.94528 15.0944 9.43142 14.3945C8.93144 13.7136 8.73514 12.9001 8.73514 12.3283C8.73514 12.1765 8.75633 11.981 8.87358 11.8169C9.01568 11.618 9.22619 11.5584 9.40046 11.5617C9.5519 11.5646 9.69847 11.613 9.81184 11.6576C9.93225 11.7049 10.0627 11.7677 10.1901 11.8304L10.2643 11.867ZM9.6146 12.5191C9.65304 12.9157 9.80861 13.4387 10.1325 13.8798C10.259 14.052 10.4113 14.2126 10.5946 14.3489C10.8301 14.0628 11.1482 13.8473 11.5124 13.7389C11.5993 13.713 11.6889 13.8627 11.7805 14.0159C11.869 14.1637 11.9594 14.3149 12.0514 14.3149C12.1494 14.3149 12.2457 14.1659 12.3397 14.0204C12.4379 13.8684 12.5336 13.7204 12.6261 13.75C12.6531 13.7586 12.6799 13.7678 12.7063 13.7776C13.0007 13.8867 13.2605 14.0671 13.4646 14.2979C13.619 14.1732 13.7499 14.031 13.861 13.8798C14.1849 13.4386 14.3404 12.9156 14.3789 12.5191C14.3062 12.5523 14.2234 12.5929 14.1271 12.6406L14.0759 12.666C13.5846 12.9098 12.8353 13.2816 11.9967 13.2816C11.1555 13.2816 10.4002 12.9061 9.90763 12.6612L9.90682 12.6608C9.87181 12.6434 9.83812 12.6266 9.80583 12.6107C9.73404 12.5754 9.67084 12.5448 9.6146 12.5191ZM14.3845 12.2678C14.3845 12.2678 14.3845 12.2678 14.3846 12.2681L14.3848 12.2693C14.3846 12.2683 14.3845 12.2678 14.3845 12.2678Z"
													fill="currentColor"
													className="box-border"
												/>
												<path
													fillRule="evenodd"
													clipRule="evenodd"
													d="M13.4818 20.3557C13.0168 20.4352 12.5388 20.4766 12.0511 20.4766C11.5966 20.4766 11.1505 20.4406 10.7155 20.3714C10.1735 20.9859 9.32496 21.297 8.18783 21.297C7.49528 21.297 6.69532 21.1805 5.81077 20.9511L5.81039 20.951C5.79063 20.9455 5.18516 20.7768 4.52417 20.5147C3.44871 20.0883 2.89489 19.691 2.67202 19.1868C2.52503 18.8541 2.53568 18.4968 2.70224 18.1807C2.71768 18.1513 2.73421 18.1226 2.75182 18.095C2.4748 17.6719 2.52785 17.2611 2.57961 17.0639C2.64571 16.8123 2.78248 16.6031 2.96817 16.4529C2.88011 16.3066 2.82118 16.1485 2.79574 15.9721C2.74225 15.6018 2.8651 15.2318 3.14169 14.9306C3.35695 14.696 3.66137 14.5668 3.9984 14.5668L4.00736 14.5669C3.75908 13.7723 3.62529 12.9272 3.62529 12.0508C3.62529 7.39737 7.39765 3.625 12.0511 3.625C16.7046 3.625 20.4769 7.39737 20.4769 12.0508C20.4769 12.9294 20.3425 13.7766 20.093 14.5729C20.1336 14.5689 20.1735 14.5668 20.2126 14.5668C20.5496 14.5668 20.854 14.696 21.0693 14.9306C21.3459 15.2318 21.4687 15.6018 21.4153 15.9721C21.3898 16.1485 21.3309 16.3066 21.2428 16.4529C21.4285 16.6031 21.5653 16.8123 21.6314 17.0639C21.6831 17.2611 21.7362 17.6719 21.4592 18.095C21.4768 18.1226 21.4933 18.1513 21.5087 18.1807C21.6753 18.4968 21.686 18.8541 21.539 19.1868C21.3161 19.691 20.7623 20.0883 19.6868 20.5147C19.0256 20.7769 18.42 20.9456 18.4007 20.951L18.4002 20.9511C17.5157 21.1805 16.7157 21.297 16.0232 21.297C14.8764 21.297 14.0231 20.9806 13.4818 20.3557ZM12.0511 4.49476C16.2242 4.49476 19.6072 7.87772 19.6072 12.0508C19.6072 12.6276 19.5425 13.1893 19.4201 13.7291C19.2075 13.5224 18.9259 13.4098 18.6153 13.4098C18.3335 13.4098 18.0436 13.5031 17.7536 13.6871C17.5611 13.8093 17.3485 14.0258 17.1295 14.2981C16.9266 14.0167 16.6427 13.8297 16.3178 13.7786C16.2556 13.7688 16.1923 13.7638 16.1299 13.7638C15.3882 13.7638 14.942 14.4072 14.7733 14.986C14.6896 15.1815 14.2878 16.0722 13.6833 16.6762C12.7664 17.5926 12.5342 18.5377 12.9826 19.55C12.6774 19.5875 12.3665 19.6069 12.0511 19.6069C11.7713 19.6069 11.495 19.5917 11.223 19.562C11.6786 18.5452 11.4482 17.5962 10.5277 16.6762C9.92322 16.0722 9.52139 15.1815 9.43767 14.986C9.26894 14.4072 8.82275 13.7638 8.08106 13.7638C8.01866 13.7638 7.95538 13.7688 7.8932 13.7786C7.56834 13.8297 7.28436 14.0167 7.08149 14.2981C6.86253 14.0258 6.64987 13.8093 6.45744 13.6871C6.16737 13.5031 5.87752 13.4098 5.59572 13.4098C5.24368 13.4098 4.92905 13.5544 4.70965 13.8166L4.70412 13.8233C4.56745 13.2548 4.49506 12.6613 4.49506 12.0508C4.49506 7.87772 7.87802 4.49476 12.0511 4.49476ZM5.59572 14.2796C5.70662 14.2796 5.84208 14.3268 5.99146 14.4216C6.45526 14.7158 7.35025 16.2542 7.67793 16.8526C7.78774 17.053 7.97539 17.1378 8.14434 17.1378C8.47963 17.1378 8.74143 16.8045 8.175 16.3809C7.32328 15.7436 7.62205 14.7018 8.02866 14.6377C8.04649 14.6349 8.0641 14.6336 8.08106 14.6336C8.45071 14.6336 8.61379 15.2707 8.61379 15.2707C8.61379 15.2707 9.09173 16.4709 9.91278 17.2913C10.7338 18.112 10.7762 18.7706 10.1778 19.6482C9.76971 20.2466 8.98844 20.4273 8.18783 20.4273C7.35742 20.4273 6.50614 20.2329 6.02908 20.1092C6.0056 20.1031 3.10429 19.2835 3.47176 18.586C3.53352 18.4688 3.63528 18.4218 3.76335 18.4218C4.038 18.4218 4.43201 18.6387 4.80181 18.8423C5.12882 19.0224 5.43692 19.192 5.62681 19.192C5.71727 19.192 5.78098 19.1535 5.80707 19.0596C5.88544 18.7784 5.35099 18.5713 4.76671 18.3449C4.06546 18.0732 3.29243 17.7736 3.42088 17.2848C3.46241 17.1263 3.57505 17.0619 3.73334 17.0622C4.13901 17.0622 4.84392 17.4854 5.41743 17.8297C5.81072 18.0658 6.14222 18.2648 6.27305 18.2648C6.29762 18.2648 6.31523 18.2577 6.3248 18.2424C6.48592 17.9824 6.39764 17.8008 5.26195 17.1135C5.17294 17.0596 5.08601 17.0074 5.00159 16.9567C4.00899 16.3606 3.36466 15.9737 3.78249 15.5188C3.83467 15.4618 3.9086 15.4366 3.9984 15.4366C4.68791 15.4368 6.31697 16.9193 6.31697 16.9193C6.31697 16.9193 6.75664 17.3766 7.02256 17.3766C7.08367 17.3766 7.13563 17.3524 7.17086 17.2929C7.26579 17.1328 6.82107 16.6806 6.34216 16.1936C5.87006 15.7135 5.36473 15.1997 5.31044 14.8986C5.23629 14.4877 5.36241 14.2796 5.59572 14.2796ZM18.2195 14.4216C18.3689 14.3268 18.5044 14.2796 18.6153 14.2796C18.8486 14.2796 18.9747 14.4877 18.9006 14.8986C18.8463 15.1997 18.3409 15.7135 17.8688 16.1936C17.3899 16.6806 16.9452 17.1328 17.0401 17.2929C17.0754 17.3524 17.1273 17.3766 17.1884 17.3766C17.4544 17.3766 17.894 16.9193 17.894 16.9193C17.894 16.9193 19.5231 15.4368 20.2126 15.4366C20.3024 15.4366 20.3763 15.4618 20.4285 15.5188C20.8463 15.9737 20.202 16.3606 19.2094 16.9567C19.125 17.0074 19.038 17.0596 18.949 17.1135C17.8133 17.8008 17.7251 17.9824 17.8862 18.2424C17.8958 18.2577 17.9134 18.2648 17.9379 18.2648C18.0688 18.2648 18.4003 18.0658 18.7936 17.8297C19.3671 17.4854 20.072 17.0622 20.4776 17.0622C20.6359 17.0619 20.7486 17.1263 20.7901 17.2848C20.9186 17.7736 20.1455 18.0732 19.4443 18.3449C18.86 18.5713 18.3255 18.7784 18.4039 19.0596C18.43 19.1535 18.4937 19.192 18.5842 19.192C18.7741 19.192 19.0822 19.0224 19.4092 18.8423C19.779 18.6387 20.173 18.4218 20.4476 18.4218C20.5757 18.4218 20.6775 18.4688 20.7392 18.586C21.1067 19.2835 18.2054 20.1031 18.1819 20.1092C17.7048 20.2329 16.8536 20.4273 16.0232 20.4273C15.2225 20.4273 14.4413 20.2466 14.0331 19.6482C13.4348 18.7706 13.4772 18.112 14.2982 17.2913C15.1193 16.4709 15.5972 15.2707 15.5972 15.2707C15.5972 15.2707 15.7603 14.6336 16.1299 14.6336C16.1469 14.6336 16.1645 14.6349 16.1823 14.6377C16.5889 14.7018 16.8877 15.7436 16.036 16.3809C15.4696 16.8045 15.7314 17.1378 16.0667 17.1378C16.2356 17.1378 16.4233 17.053 16.5331 16.8526C16.8607 16.2542 17.7557 14.7158 18.2195 14.4216Z"
													fill="currentColor"
													className="box-border"
												/>
											</svg>
											<span className="box-border">
												Hugging Face
											</span>
										</li>
									</ul>
								</span>
							</div>
						</div>
						<figure
							role="img"
							aria-label="Supabase Vector uses pgvector to store, index, and access embeddings"
							className="absolute z-0 hidden aspect-[390_/_430] w-full items-end box-border m-0 inset-[auto_0px_0px] sm:block md:w-[calc(100%_+_4rem)]"
						>
							<span className="absolute flex h-full w-full items-end justify-center box-border mx-auto inset-[4rem_0px_auto] md:inset-[0px_0px_auto] lg:inset-[0px_0px_auto]">
								<img
									alt="Supabase Vector graph"
									loading="lazy"
									decoding="async"
									data-nimg="fill"
									sizes="100%"
									srcSet="
          /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fvector-dark.svg&w=16&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6     16w,
          /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fvector-dark.svg&w=32&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6     32w,
          /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fvector-dark.svg&w=48&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6     48w,
          /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fvector-dark.svg&w=64&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6     64w,
          /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fvector-dark.svg&w=96&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6     96w,
          /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fvector-dark.svg&w=128&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6   128w,
          /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fvector-dark.svg&w=256&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6   256w,
          /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fvector-dark.svg&w=384&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6   384w,
          /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fvector-dark.svg&w=640&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6   640w,
          /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fvector-dark.svg&w=750&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6   750w,
          /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fvector-dark.svg&w=828&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6   828w,
          /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fvector-dark.svg&w=1080&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6 1080w,
          /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fvector-dark.svg&w=1200&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6 1200w,
          /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fvector-dark.svg&w=1920&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6 1920w,
          /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fvector-dark.svg&w=2048&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6 2048w,
          /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fvector-dark.svg&w=3840&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6 3840w
        "
									src="https://supabase.com/_next/image?url=%2Fimages%2Findex%2Fproducts%2Fvector-dark.svg&w=3840&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6"
									className="absolute h-full w-full text-transparent block z-0 object-contain object-[center_center] align-middle max-w-full box-border inset-0"
								/>
								<img
									alt="Supabase Vector graph"
									loading="lazy"
									decoding="async"
									data-nimg="fill"
									sizes="100%"
									srcSet="
          /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fvector-light.svg&w=16&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6     16w,
          /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fvector-light.svg&w=32&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6     32w,
          /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fvector-light.svg&w=48&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6     48w,
          /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fvector-light.svg&w=64&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6     64w,
          /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fvector-light.svg&w=96&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6     96w,
          /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fvector-light.svg&w=128&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6   128w,
          /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fvector-light.svg&w=256&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6   256w,
          /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fvector-light.svg&w=384&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6   384w,
          /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fvector-light.svg&w=640&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6   640w,
          /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fvector-light.svg&w=750&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6   750w,
          /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fvector-light.svg&w=828&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6   828w,
          /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fvector-light.svg&w=1080&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6 1080w,
          /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fvector-light.svg&w=1200&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6 1200w,
          /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fvector-light.svg&w=1920&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6 1920w,
          /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fvector-light.svg&w=2048&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6 2048w,
          /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fvector-light.svg&w=3840&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6 3840w
        "
									src="https://supabase.com/_next/image?url=%2Fimages%2Findex%2Fproducts%2Fvector-light.svg&w=3840&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6"
									className="absolute h-full w-full text-transparent hidden z-0 object-contain object-[center_center] align-middle max-w-full box-border inset-0"
								/>
								<svg
									viewBox="0 0 390 430"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									className="absolute z-20 h-full w-full opacity-0 transition-opacity ease-in-out duration-[0.15s] block align-middle box-border m-auto"
								>
									<path
										d="m195.918 125.344 80.861 46.685v93.37l-80.861 46.685-80.861-46.685v-93.37l80.861-46.685Z"
										stroke="url(#paint0_radial_484_53266)"
										strokeWidth={2}
										className="box-border"
									/>
									<defs className="box-border">
										<radialGradient
											cx={0}
											cy={0}
											r={2}
											gradientUnits="userSpaceOnUse"
											gradientTransform="translate(95.579833984375 1.76385498046875) rotate(56.4303) scale(132.019)"
											className="box-border"
										>
											<stop
												stopColor="hsl(var(--brand-default))"
												className="box-border"
											/>
											<stop
												offset={1}
												stopColor="hsl(var(--brand-default))"
												stopOpacity={0}
												className="box-border"
											/>
										</radialGradient>
									</defs>
								</svg>
							</span>
						</figure>
						<div className="pointer-events-none absolute z-10 h-full w-full opacity-20 box-border inset-0" />
					</div>
				</div>
			</a>
			<a
				href="https://supabase.com/docs/guides/api"
				className="relative col-span-6 flex w-full flex-col gap-5 box-border focus:rounded-xl focus:outline-offset-2 focus:shadow-[0_0_#0000,0_0_#0000,var(--tw-shadow,0_0_#0000)] sm:h-[400px] lg:flex-row xl:col-span-3"
			>
				<div className="relative flex h-full w-full items-center justify-center transition-all ease-in-out duration-[0.15s] box-border p-px rounded-lg hover:shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),0_0_#0000] md:rounded-xl">
					<div className="relative z-10 flex h-full w-full flex-1 flex-row items-start justify-between gap-4 overflow-hidden box-border p-4 rounded-[7px] sm:flex-col sm:items-center md:rounded-[11px]">
						<div className="relative z-10 flex h-full w-full flex-col items-start gap-2 text-left box-border mx-auto sm:items-center sm:gap-4 sm:text-center lg:pl-2">
							<div className="flex items-center gap-2 box-border">
								<svg
									width={18}
									height={18}
									viewBox="0 0 25 25"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									className="block align-middle box-border"
								>
									<path
										d="M4.13477 12.8129C4.13477 14.1481 4.43245 15.4138 4.96506 16.5471M12.925 4.02271C11.5644 4.02271 10.276 4.33184 9.12614 4.88371M21.7152 12.8129C21.7152 11.4644 21.4115 10.1867 20.8688 9.0447M12.925 21.6032C14.2829 21.6032 15.5689 21.2952 16.717 20.7454M16.717 20.7454C17.2587 21.5257 18.1612 22.0366 19.1831 22.0366C20.84 22.0366 22.1831 20.6935 22.1831 19.0366C22.1831 17.3798 20.84 16.0366 19.1831 16.0366C17.5263 16.0366 16.1831 17.3798 16.1831 19.0366C16.1831 19.6716 16.3804 20.2605 16.717 20.7454ZM4.96506 16.5471C4.16552 17.086 3.63965 17.9999 3.63965 19.0366C3.63965 20.6935 4.98279 22.0366 6.63965 22.0366C8.2965 22.0366 9.63965 20.6935 9.63965 19.0366C9.63965 17.3798 8.2965 16.0366 6.63965 16.0366C6.01951 16.0366 5.44333 16.2248 4.96506 16.5471ZM9.12614 4.88371C8.58687 4.08666 7.67444 3.56274 6.63965 3.56274C4.98279 3.56274 3.63965 4.90589 3.63965 6.56274C3.63965 8.2196 4.98279 9.56274 6.63965 9.56274C8.2965 9.56274 9.63965 8.2196 9.63965 6.56274C9.63965 5.94069 9.45032 5.36285 9.12614 4.88371ZM20.8688 9.0447C21.6621 8.50486 22.1831 7.59464 22.1831 6.56274C22.1831 4.90589 20.84 3.56274 19.1831 3.56274C17.5263 3.56274 16.1831 4.90589 16.1831 6.56274C16.1831 8.2196 17.5263 9.56274 19.1831 9.56274C19.8081 9.56274 20.3884 9.37165 20.8688 9.0447Z"
										stroke="currentColor"
										strokeMiterlimit={10}
										strokeLinejoin="round"
										strokeLinecap="round"
										strokeWidth="1.5"
										className="box-border"
									/>
								</svg>
								<h2 className="box-border text-[24px] m-0 scroll-mt-[90px]">
									Data APIs
								</h2>
							</div>
							<div className="flex flex-1 flex-col justify-between gap-2 box-border">
								<p className="text-[21px] leading-5 box-border m-0">
									Instant ready-to-use
									<strong className="box-border">
										Restful APIs
									</strong>
									.
								</p>
							</div>
						</div>
						<figure className="absolute hidden overflow-hidden box-border m-0 inset-0 sm:block">
							<div className="absolute z-0 flex flex-nowrap box-border inset-0">
								<div className="relative z-10 flex h-full animate-[30s_linear_0s_infinite_normal_both_paused_marquee-reverse] items-end will-change-transform box-border pb-2 -inset-x-10">
									<img
										alt="Supabase restful DataAPIs"
										loading="lazy"
										decoding="async"
										data-nimg="fill"
										sizes="100%"
										srcSet="
            /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdata-apis-lines-dark.svg&w=16&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6     16w,
            /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdata-apis-lines-dark.svg&w=32&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6     32w,
            /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdata-apis-lines-dark.svg&w=48&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6     48w,
            /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdata-apis-lines-dark.svg&w=64&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6     64w,
            /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdata-apis-lines-dark.svg&w=96&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6     96w,
            /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdata-apis-lines-dark.svg&w=128&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6   128w,
            /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdata-apis-lines-dark.svg&w=256&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6   256w,
            /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdata-apis-lines-dark.svg&w=384&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6   384w,
            /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdata-apis-lines-dark.svg&w=640&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6   640w,
            /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdata-apis-lines-dark.svg&w=750&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6   750w,
            /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdata-apis-lines-dark.svg&w=828&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6   828w,
            /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdata-apis-lines-dark.svg&w=1080&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6 1080w,
            /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdata-apis-lines-dark.svg&w=1200&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6 1200w,
            /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdata-apis-lines-dark.svg&w=1920&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6 1920w,
            /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdata-apis-lines-dark.svg&w=2048&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6 2048w,
            /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdata-apis-lines-dark.svg&w=3840&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6 3840w
          "
										src="https://supabase.com/_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdata-apis-lines-dark.svg&w=3840&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6"
										className="absolute h-full w-full text-transparent block align-middle max-w-full box-border inset-0"
									/>
									<img
										alt="Supabase restful DataAPIs"
										loading="lazy"
										decoding="async"
										data-nimg="fill"
										sizes="100%"
										srcSet="
            /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdata-apis-lines-light.svg&w=16&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6     16w,
            /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdata-apis-lines-light.svg&w=32&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6     32w,
            /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdata-apis-lines-light.svg&w=48&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6     48w,
            /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdata-apis-lines-light.svg&w=64&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6     64w,
            /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdata-apis-lines-light.svg&w=96&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6     96w,
            /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdata-apis-lines-light.svg&w=128&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6   128w,
            /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdata-apis-lines-light.svg&w=256&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6   256w,
            /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdata-apis-lines-light.svg&w=384&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6   384w,
            /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdata-apis-lines-light.svg&w=640&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6   640w,
            /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdata-apis-lines-light.svg&w=750&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6   750w,
            /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdata-apis-lines-light.svg&w=828&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6   828w,
            /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdata-apis-lines-light.svg&w=1080&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6 1080w,
            /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdata-apis-lines-light.svg&w=1200&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6 1200w,
            /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdata-apis-lines-light.svg&w=1920&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6 1920w,
            /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdata-apis-lines-light.svg&w=2048&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6 2048w,
            /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdata-apis-lines-light.svg&w=3840&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6 3840w
          "
										src="https://supabase.com/_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdata-apis-lines-light.svg&w=3840&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6"
										className="absolute h-full w-full text-transparent block align-middle max-w-full box-border inset-0"
									/>
								</div>
								<div className="relative z-10 flex h-full animate-[30s_linear_0s_infinite_normal_both_paused_marquee-reverse] items-end will-change-transform box-border pb-2 -inset-x-10">
									<img
										alt="Supabase restful DataAPIs"
										loading="lazy"
										decoding="async"
										data-nimg="fill"
										sizes="100%"
										srcSet="
            /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdata-apis-lines-dark.svg&w=16&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6     16w,
            /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdata-apis-lines-dark.svg&w=32&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6     32w,
            /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdata-apis-lines-dark.svg&w=48&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6     48w,
            /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdata-apis-lines-dark.svg&w=64&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6     64w,
            /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdata-apis-lines-dark.svg&w=96&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6     96w,
            /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdata-apis-lines-dark.svg&w=128&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6   128w,
            /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdata-apis-lines-dark.svg&w=256&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6   256w,
            /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdata-apis-lines-dark.svg&w=384&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6   384w,
            /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdata-apis-lines-dark.svg&w=640&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6   640w,
            /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdata-apis-lines-dark.svg&w=750&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6   750w,
            /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdata-apis-lines-dark.svg&w=828&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6   828w,
            /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdata-apis-lines-dark.svg&w=1080&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6 1080w,
            /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdata-apis-lines-dark.svg&w=1200&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6 1200w,
            /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdata-apis-lines-dark.svg&w=1920&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6 1920w,
            /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdata-apis-lines-dark.svg&w=2048&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6 2048w,
            /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdata-apis-lines-dark.svg&w=3840&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6 3840w
          "
										src="https://supabase.com/_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdata-apis-lines-dark.svg&w=3840&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6"
										className="absolute h-full w-full text-transparent block align-middle max-w-full box-border inset-0"
									/>
									<img
										alt="Supabase restful DataAPIs"
										loading="lazy"
										decoding="async"
										data-nimg="fill"
										sizes="100%"
										srcSet="
            /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdata-apis-lines-light.svg&w=16&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6     16w,
            /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdata-apis-lines-light.svg&w=32&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6     32w,
            /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdata-apis-lines-light.svg&w=48&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6     48w,
            /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdata-apis-lines-light.svg&w=64&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6     64w,
            /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdata-apis-lines-light.svg&w=96&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6     96w,
            /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdata-apis-lines-light.svg&w=128&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6   128w,
            /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdata-apis-lines-light.svg&w=256&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6   256w,
            /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdata-apis-lines-light.svg&w=384&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6   384w,
            /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdata-apis-lines-light.svg&w=640&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6   640w,
            /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdata-apis-lines-light.svg&w=750&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6   750w,
            /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdata-apis-lines-light.svg&w=828&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6   828w,
            /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdata-apis-lines-light.svg&w=1080&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6 1080w,
            /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdata-apis-lines-light.svg&w=1200&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6 1200w,
            /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdata-apis-lines-light.svg&w=1920&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6 1920w,
            /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdata-apis-lines-light.svg&w=2048&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6 2048w,
            /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdata-apis-lines-light.svg&w=3840&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6 3840w
          "
										src="https://supabase.com/_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdata-apis-lines-light.svg&w=3840&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6"
										className="absolute h-full w-full text-transparent block align-middle max-w-full box-border inset-0"
									/>
								</div>
								<div className="relative z-10 flex h-full animate-[30s_linear_0s_infinite_normal_both_paused_marquee-reverse] items-end will-change-transform box-border pb-2 -inset-x-10">
									<img
										alt="Supabase restful DataAPIs"
										loading="lazy"
										decoding="async"
										data-nimg="fill"
										sizes="100%"
										srcSet="
            /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdata-apis-lines-dark.svg&w=16&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6     16w,
            /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdata-apis-lines-dark.svg&w=32&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6     32w,
            /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdata-apis-lines-dark.svg&w=48&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6     48w,
            /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdata-apis-lines-dark.svg&w=64&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6     64w,
            /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdata-apis-lines-dark.svg&w=96&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6     96w,
            /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdata-apis-lines-dark.svg&w=128&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6   128w,
            /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdata-apis-lines-dark.svg&w=256&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6   256w,
            /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdata-apis-lines-dark.svg&w=384&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6   384w,
            /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdata-apis-lines-dark.svg&w=640&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6   640w,
            /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdata-apis-lines-dark.svg&w=750&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6   750w,
            /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdata-apis-lines-dark.svg&w=828&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6   828w,
            /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdata-apis-lines-dark.svg&w=1080&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6 1080w,
            /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdata-apis-lines-dark.svg&w=1200&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6 1200w,
            /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdata-apis-lines-dark.svg&w=1920&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6 1920w,
            /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdata-apis-lines-dark.svg&w=2048&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6 2048w,
            /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdata-apis-lines-dark.svg&w=3840&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6 3840w
          "
										src="https://supabase.com/_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdata-apis-lines-dark.svg&w=3840&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6"
										className="absolute h-full w-full text-transparent block align-middle max-w-full box-border inset-0"
									/>
									<img
										alt="Supabase restful DataAPIs"
										loading="lazy"
										decoding="async"
										data-nimg="fill"
										sizes="100%"
										srcSet="
            /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdata-apis-lines-light.svg&w=16&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6     16w,
            /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdata-apis-lines-light.svg&w=32&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6     32w,
            /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdata-apis-lines-light.svg&w=48&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6     48w,
            /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdata-apis-lines-light.svg&w=64&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6     64w,
            /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdata-apis-lines-light.svg&w=96&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6     96w,
            /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdata-apis-lines-light.svg&w=128&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6   128w,
            /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdata-apis-lines-light.svg&w=256&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6   256w,
            /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdata-apis-lines-light.svg&w=384&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6   384w,
            /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdata-apis-lines-light.svg&w=640&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6   640w,
            /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdata-apis-lines-light.svg&w=750&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6   750w,
            /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdata-apis-lines-light.svg&w=828&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6   828w,
            /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdata-apis-lines-light.svg&w=1080&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6 1080w,
            /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdata-apis-lines-light.svg&w=1200&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6 1200w,
            /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdata-apis-lines-light.svg&w=1920&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6 1920w,
            /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdata-apis-lines-light.svg&w=2048&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6 2048w,
            /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdata-apis-lines-light.svg&w=3840&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6 3840w
          "
										src="https://supabase.com/_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdata-apis-lines-light.svg&w=3840&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6"
										className="absolute h-full w-full text-transparent block align-middle max-w-full box-border inset-0"
									/>
								</div>
								<img
									alt="Supabase restful DataAPIs"
									loading="lazy"
									decoding="async"
									data-nimg="fill"
									sizes="100%"
									srcSet="
          /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdata-apis-dark.svg&w=16&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6     16w,
          /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdata-apis-dark.svg&w=32&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6     32w,
          /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdata-apis-dark.svg&w=48&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6     48w,
          /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdata-apis-dark.svg&w=64&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6     64w,
          /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdata-apis-dark.svg&w=96&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6     96w,
          /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdata-apis-dark.svg&w=128&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6   128w,
          /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdata-apis-dark.svg&w=256&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6   256w,
          /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdata-apis-dark.svg&w=384&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6   384w,
          /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdata-apis-dark.svg&w=640&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6   640w,
          /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdata-apis-dark.svg&w=750&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6   750w,
          /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdata-apis-dark.svg&w=828&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6   828w,
          /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdata-apis-dark.svg&w=1080&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6 1080w,
          /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdata-apis-dark.svg&w=1200&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6 1200w,
          /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdata-apis-dark.svg&w=1920&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6 1920w,
          /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdata-apis-dark.svg&w=2048&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6 2048w,
          /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdata-apis-dark.svg&w=3840&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6 3840w
        "
									src="https://supabase.com/_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdata-apis-dark.svg&w=3840&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6"
									className="absolute h-full w-full text-transparent block z-10 aspect-[330_/_430] object-contain object-[center_center] align-middle max-w-full box-border inset-0 xl:object-cover"
								/>
								<img
									alt="Supabase restful DataAPIs"
									loading="lazy"
									decoding="async"
									data-nimg="fill"
									sizes="100%"
									srcSet="
          /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdata-apis-light.svg&w=16&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6     16w,
          /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdata-apis-light.svg&w=32&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6     32w,
          /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdata-apis-light.svg&w=48&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6     48w,
          /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdata-apis-light.svg&w=64&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6     64w,
          /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdata-apis-light.svg&w=96&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6     96w,
          /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdata-apis-light.svg&w=128&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6   128w,
          /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdata-apis-light.svg&w=256&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6   256w,
          /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdata-apis-light.svg&w=384&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6   384w,
          /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdata-apis-light.svg&w=640&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6   640w,
          /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdata-apis-light.svg&w=750&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6   750w,
          /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdata-apis-light.svg&w=828&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6   828w,
          /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdata-apis-light.svg&w=1080&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6 1080w,
          /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdata-apis-light.svg&w=1200&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6 1200w,
          /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdata-apis-light.svg&w=1920&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6 1920w,
          /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdata-apis-light.svg&w=2048&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6 2048w,
          /_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdata-apis-light.svg&w=3840&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6 3840w
        "
									src="https://supabase.com/_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdata-apis-light.svg&w=3840&q=100&dpl=dpl_gWrRbUeqg1TWqaHXWhXkLC8PAKG6"
									className="absolute h-full w-full text-transparent hidden z-10 aspect-[330_/_430] object-contain object-[center_center] align-middle max-w-full box-border inset-0 xl:object-cover"
								/>
							</div>
						</figure>
						<div className="pointer-events-none absolute z-10 h-full w-full opacity-20 box-border inset-0" />
					</div>
				</div>
			</a>
			<p className="col-span-full text-[36px] leading-7 tracking-[-0.01rem] box-border m-0 sm:text-2xl sm:leading-8">
				<span className="box-border">Use one or all.</span>
				Best of breed products. Integrated as a platform.
			</p>
		</div>
	)
}
