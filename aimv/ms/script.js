let example = document.querySelector('#example'),
	compute = document.querySelector('#compute'),
	output = document.querySelector('#output'),
	upLimit = document.querySelector('#upLimit'),
	downLimit = document.querySelector('#downLimit'),
	ePogr = document.querySelector('#ePogr');

compute.onclick = function(){
	output.innerText = 'Результат: ' + SimpsonMethod(+downLimit.value,+upLimit.value,+ePogr.value);
}


function f(x){
	return eval(example.value);
}
 
function SimpsonMethod(a,b,eps){
let I = eps+1;
let I1 = 0;
	for (let N=2;(N<=4)||(Math.abs(I1-I)>eps); N*=2)
	{
		let h, sum2=0, sum4=0, sum=0;
		h=(b-a)/(2*N);
		for (let i=1;i<=2*N-1;i+=2)
		{   
			sum4+=f(a+h*i);
			sum2+=f(a+h*(i+1));
		}
		sum=f(a)+4*sum4+2*sum2-f(b);
		I=I1;
		I1=(h/3)*sum;
	}
	return I1;
}













// int main() {
// 	double a, b, eps;//Нижний и верхний пределы интегрирования (a, b), погрешность (eps).
// 	cin >> a >> b >> eps;
// 	double I=eps+1, I1=0;//I-предыдущее вычисленное значение интеграла, I1-новое, с большим N.
// 	for (int N=2; (N<=4)||(fabs(I1-I)>eps); N*=2)
// 	{
// 		double h, sum2=0, sum4=0, sum=0;
// 		h=(b-a)/(2*N);//Шаг интегрирования.
// 		for (int i=1; i<=2*N-1; i+=2)
// 		{   
// 			sum4+=f(a+h*i);//Значения с нечётными индексами, которые нужно умножить на 4.
// 			sum2+=f(a+h*(i+1));//Значения с чётными индексами, которые нужно умножить на 2.
// 		}
// 		sum=f(a)+4*sum4+2*sum2-f(b);//Отнимаем значение f(b) так как ранее прибавили его дважды. 
// 		I=I1;
// 		I1=(h/3)*sum;
// 	}
// 	cout << I1 << endl;
// 	return 0;
// }