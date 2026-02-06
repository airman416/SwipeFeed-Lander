import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { PostHogProvider } from "posthog-js/react";
import { HelmetProvider } from "react-helmet-async";
import posthog from "@/lib/posthog";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Privacy from "@/pages/privacy";
import Terms from "@/pages/terms";
import DayTime from "@/pages/daytime";
import Card from "@/pages/card";
import FeedSharePrivacy from "@/pages/feedshare-privacy";
import FeedShareTerms from "@/pages/feedshare-terms";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/terms" component={Terms} />
      <Route path="/feedshare/privacy" component={FeedSharePrivacy} />
      <Route path="/feedshare/terms" component={FeedShareTerms} />
      <Route path="/daytime" component={DayTime} />
      <Route path="/card/:id" component={Card} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <PostHogProvider client={posthog}>
          <TooltipProvider>
            <Toaster />
            <Router />
          </TooltipProvider>
        </PostHogProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
