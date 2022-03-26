/**
 * @param {number[][]} routes
 * @param {number} source
 * @param {number} target
 * @return {number}
 */
var numBusesToDestination = function(routes, source, target) {
    if(source === target) return 0;
    const stops = {};
    for(let routeIdx=0; routeIdx < routes.length; routeIdx++){
        let route = routes[routeIdx];
        for(let stop of route){
            if(!(stop in stops)) stops[stop] = [];
            stops[stop].push(routeIdx);
        }
    }
    if(!(source in stops)) return -1;
    const queue = new Queue();
    const visitedStops = new Set();
    const visitedRouteIndices = new Set();
    queue.enqueue([source, 1]);
    while(queue.size() > 0){
        const [currentStop, busesTaken] = queue.dequeue();
        visitedStops.add(currentStop);
        const routesAtStop = stops[currentStop];
        for(let routeIdx of routesAtStop){
            if(visitedRouteIndices.has(routeIdx)) continue;
            for(let stop of routes[routeIdx]){
                if(visitedStops.has(stop) || !(stop in stops)) continue;
                if(stop === target) return busesTaken;
                queue.enqueue([stop, busesTaken + 1]);
            }
            visitedRouteIndices.add(routeIdx);
        }
    }
    return -1;
};