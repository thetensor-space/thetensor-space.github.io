set terminal epslatex size 6in, 4in "fontsize" 24
set output 'Main2.tex'
set key left box
set grid
#set title 'BMW Algorithm' offset 0,-0.5
set xlabel '$|G|$' offset 0,0.5
set xrange [5:256]
set xtics('$5^5$' 5, '$5^{50}$' 50, '$5^{100}$' 100, '$5^{150}$' 150, '$5^{200}$' 200, '$5^{256}$' 256 )\
  offset 0,0
set ylabel 'Minutes'
set yrange [0:4200]
set ytics('$0$' 0, '$10$' 600, '$20$' 1200, '$30$' 1800, '$40$' 2400, '$50$' 3000, '$60$' 3600,\
  '$70$' 4200)#, '$80$' 4800, '$90$' 5400, '$100$' 6000, '$110$' 6600, '$120$' 7200,\
  '$130$' 7800, '$140$' 8400)

#From Matlab 'fit(x,y,'poly4')
p1 = 0.000001692
p2 = -0.0003655
p3 = 0.02836
p4 = -0.7965
p5 = 5.671
f(x) = p1*x**4 + p2*x**3 + p3*x**2 + p4*x + p5
plot 'ExpA_TimeSlopeData' u 1:2 title 'Grp Iso' lc rgb '#14689A' pt 7 ps 1.6, 'ExpA_TimeFlatData' u 1:2 title '' lc rgb '#14689A' pt 7 ps 1.6, f(x) title 'Lin Alg' lc rgb "#424242" lw 16 lt 3
set output

