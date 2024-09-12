#include<iostream>
#include<unordered_map>
#include<list>
#include<vector>
using namespace std;
class graph{
    public:
    unordered_map<int,list<int>> adj;
    void addEdges(int u,int v,bool direction){
        adj[u].push_back(v);
        if (direction == 0)
        {
            adj[v].push_back(u);
        }
        
    }
    bool check(){
        veisited[node] = true;
        dfsvisited[node] = true;// only the visited are true //

        for(auto n: adj[node]){
            if(!visited[n]){
                bool cyclefound = check();
                if(cyclefound){
                    return true;
                }
            else{
                if(dfsvisited[n]){
                    return true;
                }
            }    
            }
        }
    }
    void dfs(vector<vector<int>> edges, int,int n){
        unordered_map<int,bool> visited;
        unordered_map<int,int> adj;
        for (size_t i = 0; i < n; i++){
            int u = edges[i][0];
            int v = edges[i][1];
            adj[u].push_back(v); 
            adj[v].push_back(u); 
        } 
         
        
    }
    void print_graph(){
        for (auto i:adj){
            cout<<i.first<<"->";
            for (auto j:i.second){
                cout<<j<<" ";
                }
        }
        
    }
};
int main(){
    graph g;
}
