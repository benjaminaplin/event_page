console.log('json.js is linked')
var slideShowContent = [
  {
    smImg:'./images/1.jpg', 
    lgImg: './images/large_1.jpg', 
    slideShowText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis non erat in sagittis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam sit amet eros quis arcu aliquam ornare sed nec arcu. Nunc mattis turpis eu ante faucibus lobortis. Phasellus sit amet lacus et erat auctor finibus. In imperdiet felis nibh, vel rhoncus quam molestie vel. Mauris ornare scelerisque risus mattis maximus. Vivamus quis finibus risus, quis commodo magna. "
  },{
    smImg:'./images/2.jpg', 
    lgImg: './images/large_2.jpg', 
    slideShowText: "Sed commodo massa sit amet lacus imperdiet placerat. Donec feugiat volutpat venenatis. Sed sagittis tortor nunc, eu dapibus erat ultricies in. Sed ligula justo, porta eu bibendum nec, sagittis non lorem. In condimentum fermentum neque ut ultricies. Donec gravida magna vitae quam elementum auctor. Pellentesque vehicula mi ultricies diam fermentum, et mollis mauris bibendum. Etiam lacinia sem a libero ullamcorper, eu condimentum sem maximus. Nunc vitae enim quis sem rhoncus consectetur."
  },{
    smImg:'./images/3.jpg', 
    lgImg: './images/large_3.jpg', 
    slideShowText: "Duis id tempor lacus. Fusce pulvinar ipsum purus, et pellentesque quam ultricies ut. Fusce aliquam metus vel hendrerit vehicula. Proin vulputate eu eros at consectetur. Integer efficitur, tellus vitae maximus pretium, odio justo bibendum velit, sed finibus velit sapien a sapien. Curabitur nisl justo, volutpat vel nulla in, porta viverra nunc. Phasellus hendrerit posuere turpis non facilisis. Morbi dapibus augue sit amet diam semper, at pharetra risus accumsan. "
  },{
    smImg:'./images/4.jpg', 
    lgImg: './images/large_4.jpg', 
    slideShowText: "Sed ac dolor in enim tempus cursus vel eu ex. Praesent feugiat id lorem vel vehicula. Nulla facilisi. Proin iaculis neque quis gravida tempor. Praesent rhoncus nisi ac sodales finibus. Sed non sem at mauris tempus volutpat eget at nisl. Aenean pulvinar, erat eu imperdiet placerat, turpis justo euismod risus, vel tristique tellus ipsum ac turpis. Quisque ullamcorper suscipit neque, quis interdum odio lobortis quis. Morbi ultrices purus at lectus sagittis gravida."
  },{
    smImg:'./images/5.jpg', 
    lgImg: './images/large_5.jpg', 
    slideShowText: "Aliquam sit amet rutrum nibh. Curabitur non ante sed libero efficitur rutrum vitae eget libero. Donec ut magna purus. Nam mattis maximus velit, sed condimentum ligula tempus at. Praesent hendrerit massa velit, non pellentesque odio iaculis eu. Vivamus sed ullamcorper felis. Nam ex sem, auctor ac fermentum ac, elementum ac elit. Aenean non convallis enim, nec varius sapien. Nulla non neque vulputate, pellentesque lorem eu, suscipit enim. In in faucibus dolor."
  },{
    smImg:'./images/6.jpg', 
    lgImg: './images/large_6.jpg', 
    slideShowText: "Phasellus euismod congue elit, pretium rutrum risus consequat quis. Fusce eu tempor urna. Donec id tincidunt orci. Phasellus et elementum augue, dictum dignissim urna. Morbi placerat fringilla enim, in rutrum magna. Nunc porttitor nisl ac nisl venenatis, pretium egestas felis porta. Cras efficitur dolor non maximus molestie. Duis at diam vehicula, tincidunt erat et, hendrerit metus. Praesent nisi sem, ullamcorper at ipsum ut, porta consequat dolor."
  },{
    smImg:'./images/7.jpg', 
    lgImg: './images/large_7.jpg', 
    slideShowText: "Nulla convallis dictum tortor eu auctor. Morbi faucibus condimentum placerat. Vivamus efficitur, erat posuere cursus gravida, diam mauris egestas diam, nec imperdiet tellus erat ac est. Sed massa dolor, pellentesque sit amet pharetra a, posuere id urna. Quisque molestie, leo quis ullamcorper pellentesque, eros mi elementum nisi, vitae sodales risus elit at urna. In ac velit laoreet, condimentum magna vestibulum, rutrum turpis. Pellentesque vitae fringilla lectus."
  },{
    smImg:'./images/9.jpg', 
    lgImg: './images/large_9.jpg', 
    slideShowText: "Sed rutrum auctor rutrum. Maecenas maximus gravida sodales. Etiam et erat vitae ante sollicitudin rhoncus. Nulla ac magna non lorem finibus commodo. In ultrices, erat ac posuere euismod, felis enim mollis libero, at lobortis odio neque vel nibh. Sed imperdiet dolor non mauris lobortis ullamcorper. Donec eu rhoncus nunc, sed convallis dolor."
  },{
    smImg:'./images/10.jpg', 
    lgImg: './images/large_10.jpg', 
    slideShowText: "Nunc ut purus suscipit, venenatis sem cursus, imperdiet lorem. Proin id sollicitudin enim, nec hendrerit justo. Aliquam posuere neque vel tortor vestibulum, quis pretium augue varius. Aliquam dictum tortor sit amet varius ultrices. Proin at venenatis lacus. Phasellus elementum viverra placerat. Nullam ornare libero et mauris rutrum cursus. Nullam laoreet pellentesque commodo. Mauris convallis risus lobortis, dignissim orci et, egestas augue."
  },{
    smImg:'./images/11.jpg', 
    lgImg: './images/large_11.jpg', 
    slideShowText: "Suspendisse ac risus hendrerit, sagittis lectus eget, sodales felis. Praesent tortor neque, malesuada vel ante id, scelerisque convallis diam. Aenean pharetra convallis lacus, in laoreet enim auctor quis. Nullam id lorem in mauris pulvinar facilisis. Integer vehicula, ipsum sed dignissim congue, nunc ex tincidunt tortor, a viverra tortor est sit amet turpis. Ut volutpat ipsum quis pretium scelerisque. Donec eget nisi enim. Maecenas ut massa nibh. Nulla ut lacinia felis."
  },{
    smImg:'./images/12.jpg', 
    lgImg: './images/large_12.jpg', 
    slideShowText: "Duis non elit a urna mattis rutrum. Duis sagittis sapien ac arcu tristique, nec suscipit odio vehicula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean tempus risus non orci iaculis, a mollis tortor bibendum. Praesent cursus in ligula quis fermentum. Fusce accumsan dapibus mi in tincidunt. Proin non mi mi. Fusce fringilla metus ac lectus eleifend, et bibendum enim eleifend. Nunc mattis iaculis elit at auctor. "
  },{
    smImg:'./images/13.jpg', 
    lgImg: './images/large_13.jpg', 
    slideShowText: "Duis posuere hendrerit dictum. Sed et dolor molestie, efficitur risus quis, efficitur ante. Mauris eget finibus nisi. Vivamus lacinia urna arcu, nec bibendum tellus vulputate eu. Praesent mattis accumsan augue, a lobortis orci cursus id. Fusce sodales mauris vitae tellus luctus lobortis. In dapibus consequat eros, et dictum sapien posuere mattis. Suspendisse quis leo commodo, venenatis sapien vel, efficitur ante. Etiam eget ornare turpis."
  },{
    smImg:'./images/14.jpg', 
    lgImg: './images/large_14.jpg', 
    slideShowText: "Proin consequat condimentum tellus a bibendum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In scelerisque lorem nec accumsan egestas. Phasellus accumsan eleifend urna, sit amet feugiat lacus dictum quis. Vestibulum et turpis et risus vestibulum aliquet eu ut neque. Donec tristique nunc ac mollis elementum. Sed non neque vel metus hendrerit volutpat suscipit vitae diam."
  },{
    smImg:'./images/15.jpg', 
    lgImg: './images/large_15.jpg', 
    slideShowText: "Aliquam varius enim massa, non molestie ex eleifend non. Praesent accumsan ac velit a venenatis. Cras iaculis, ex non convallis aliquet, lorem elit imperdiet massa, ac imperdiet erat sapien vel libero. Suspendisse imperdiet ex nec leo placerat feugiat. Mauris dignissim, mi a convallis scelerisque, justo nunc efficitur massa, at auctor erat eros non libero. Nam iaculis vulputate velit, a facilisis nunc posuere id. Aliquam sollicitudin ipsum neque, a gravida velit commodo non."
  }
]