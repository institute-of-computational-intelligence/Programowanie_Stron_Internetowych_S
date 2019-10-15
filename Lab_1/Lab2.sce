n = 50
K1 = 15*rand(2,n)+5
K2 = 15*rand(2,n)+25
P = [K1,K2]
plot(K1(1,:), K1(2,:),'rx', K2(1,:), K2(2,:),'bo')

W=[rand(1:100)];
for i = 1:n
    iloczyn = P(i)*W(i);
    fi = fi + iloczyn;
    i = i + 1;
end
disp(fi);

