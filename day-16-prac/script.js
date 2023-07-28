let $Counter = document.querySelector(".count");

//Adding call back hell event listener to generate counter by adding set timeout

$Counter.addEventListener("click", function (event) {
	event.preventDefault();
	$Counter.innerText = 10;

	setTimeout(function () {
		$Counter.innerText = 9;

		setTimeout(function () {
			$Counter.innerText = 8;

			setTimeout(function () {
				$Counter.innerText = 7;

				setTimeout(function () {
					$Counter.innerText = 6;

					setTimeout(function () {
						$Counter.innerText = 5;

						setTimeout(function () {
							$Counter.innerText = 4;

							setTimeout(function () {
								$Counter.innerText = 3;

								setTimeout(function () {
									$Counter.innerText = 2;

									setTimeout(function () {
										$Counter.innerText = 1;

										setTimeout(function () {
											$Counter.classList.add("colorChange");

											$Counter.innerText =
												"!!!!!!!!!!!!!!!!Happy Independence Day!!!!!!!!!!!!!!!!!!";
										}, 2000);
									}, 2000);
								}, 2000);
							}, 2000);
						}, 2000);
					}, 2000);
				}, 2000);
			}, 2000);
		}, 2000);
	}, 2000);
});