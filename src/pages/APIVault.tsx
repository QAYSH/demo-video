import React from 'react';
import { 
  Key, 
  ShieldCheck, 
  RefreshCw, 
  AlertTriangle, 
  EyeOff, 
  Copy,
  Lock,
  TrendingUp,
  Plus,
  Edit2,
  FileText,
  ChevronDown,
  ArrowRight
} from 'lucide-react';

const APIVault: React.FC = () => {
  const logs = [
    { time: 'Oct 24, 14:22:10', provider: 'OpenAI', type: 'gpt-4o-mini (Inference)', cost: '$0.002', status: 'SUCCESS' },
    { time: 'Oct 24, 14:21:45', provider: 'DeepSeek', type: 'deepseek-coder (Inference)', cost: '$0.0001', status: 'SUCCESS' },
    { time: 'Oct 24, 14:15:02', provider: 'OpenAI', type: 'gpt-4o (Embeddings)', cost: '$0.005', status: 'RATE LIMITED' },
  ];

  return (
    <div className="api-vault-page">
      <div className="page-header">
        <div className="breadcrumb">
          <span>Dashboard</span> / <span className="active">API Vault</span>
        </div>
        <div className="header-flex">
          <div className="title-area">
            <h1>API Key Vault</h1>
            <p>Securely manage and monitor institutional AI service credentials. Your keys are encrypted before storage.</p>
          </div>
          <div className="encrypted-badge">
            <Lock size={14} />
            <span>END-TO-END ENCRYPTED</span>
          </div>
        </div>
      </div>

      <div className="vault-layout">
        <div className="keys-col">
          <h3 className="section-title"><Key size={18} /> Active Keys</h3>
          
          <div className="key-card card active">
            <div className="card-top">
              <div className="provider-logo openai">
                <img src="https://api.dicebear.com/7.x/identicon/svg?seed=openai" alt="OpenAI" />
              </div>
              <div className="provider-info">
                <h4>OpenAI Production</h4>
                <div className="key-display">
                  <code>sk-••••••••••••1234</code>
                  <Copy size={14} className="copy-icon" />
                </div>
              </div>
              <span className="status-badge-filled green">ACTIVE</span>
            </div>
            
            <div className="budget-progress-section">
              <div className="progress-header">
                <div className="label-val">
                  <span className="label">MONTHLY BUDGET PROGRESS</span>
                  <span className="val"><strong>$842.50</strong> / $1,200.00</span>
                </div>
                <div className="usage-stat">
                  <span className="label">USAGE</span>
                  <span className="val blue">70.2%</span>
                </div>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '70.2%' }}></div>
              </div>
            </div>

            <div className="card-actions">
              <button className="test-btn"><RefreshCw size={14} /> Test Connection</button>
              <button className="icon-btn-ghost border"><Edit2 size={16} /></button>
            </div>
          </div>

          <div className="key-card card warning">
            <div className="card-top">
              <div className="provider-logo deepseek">
                <img src="https://api.dicebear.com/7.x/identicon/svg?seed=deepseek" alt="DeepSeek" />
              </div>
              <div className="provider-info">
                <h4>DeepSeek Research</h4>
                <div className="key-display">
                  <code>ds-••••••••••••8892</code>
                  <Copy size={14} className="copy-icon" />
                </div>
              </div>
              <span className="status-badge-filled orange">ROTATION REQUIRED</span>
            </div>

            <div className="risk-alert">
              <AlertTriangle size={16} />
              <div className="risk-text">
                <strong>Security Risk: Key Over 90 Days Old</strong>
                <p>This key was last rotated 104 days ago. For academic compliance, please rotate immediately.</p>
              </div>
            </div>
            
            <div className="budget-progress-section">
              <div className="progress-header">
                <div className="label-val">
                  <span className="label">MONTHLY BUDGET PROGRESS</span>
                  <span className="val"><strong>$45.00</strong> / $500.00</span>
                </div>
                <div className="usage-stat">
                  <span className="label">USAGE</span>
                  <span className="val blue">9.0%</span>
                </div>
              </div>
              <div className="progress-bar">
                <div className="progress-fill blue" style={{ width: '9%' }}></div>
              </div>
            </div>

            <div className="card-actions">
              <button className="rotate-btn"><RefreshCw size={14} /> Rotate Key</button>
              <button className="icon-btn-ghost border"><Edit2 size={16} /></button>
            </div>
          </div>

          <h3 className="section-title mt-40"><FileText size={18} /> Usage Logs</h3>
          <div className="logs-table-card card">
            <table className="logs-table">
              <thead>
                <tr>
                  <th>TIMESTAMP</th>
                  <th>PROVIDER</th>
                  <th>REQUEST TYPE</th>
                  <th>COST</th>
                  <th>STATUS</th>
                </tr>
              </thead>
              <tbody>
                {logs.map((log, i) => (
                  <tr key={i}>
                    <td>{log.time}</td>
                    <td><strong>{log.provider}</strong></td>
                    <td>{log.type}</td>
                    <td>{log.cost}</td>
                    <td>
                      <span className={`status-badge-outline ${log.status === 'SUCCESS' ? 'green' : 'red'}`}>
                        {log.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="sidebar-col">
          <div className="add-provider-card card">
            <div className="card-header">
              <Plus size={18} className="blue" />
              <h3>Add Provider</h3>
            </div>
            <div className="form-group">
              <label>PROVIDER</label>
              <div className="select-box">
                Select AI Provider...
                <ChevronDown size={16} />
              </div>
            </div>
            <div className="form-group">
              <label>API KEY</label>
              <div className="input-box">
                <input type="password" value="••••••••••••" readOnly />
                <EyeOff size={16} />
              </div>
            </div>
            <div className="form-group">
              <label>MONTHLY BUDGET LIMIT ($)</label>
              <div className="input-box">
                <input type="text" value="500.00" readOnly />
              </div>
            </div>
            <button className="encrypt-btn"><Lock size={16} /> Encrypt & Store Key</button>
          </div>

          <div className="security-note card">
            <div className="note-header">
              <ShieldCheck size={20} />
              <span>Security Note</span>
            </div>
            <p>UniLMS uses AES-256-GCM encryption at the application layer before storing your credentials in our hardware security module (HSM). Access is restricted to authorized service agents only.</p>
          </div>

          <div className="prediction-card card">
            <div className="pred-header">
              <TrendingUp size={18} />
              <span>AI COST PREDICTION</span>
            </div>
            <p>Based on current curriculum growth, your OpenAI consumption is expected to reach <strong>$1,050</strong> by the end of the semester.</p>
            <button className="view-full">View full projection <ArrowRight size={14} /></button>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .api-vault-page { max-width: 1300px; margin: 0 auto; }
        
        .page-header { margin-bottom: 32px; }
        .breadcrumb { font-size: 13px; color: var(--text-muted); font-weight: 600; margin-bottom: 16px; }
        .breadcrumb .active { color: var(--primary); }
        
        .header-flex { display: flex; justify-content: space-between; align-items: flex-start; }
        .title-area h1 { font-size: 32px; font-weight: 700; margin-bottom: 12px; }
        .title-area p { font-size: 14px; color: var(--text-muted); line-height: 1.6; max-width: 600px; }
        
        .encrypted-badge { display: flex; align-items: center; gap: 8px; background: #eff6ff; color: var(--primary); padding: 8px 16px; border-radius: 8px; font-size: 10px; font-weight: 800; border: 1px solid #bfdbfe; }

        .vault-layout { display: grid; grid-template-columns: 1fr 340px; gap: 40px; }
        
        .section-title { font-size: 18px; font-weight: 700; display: flex; align-items: center; gap: 12px; margin-bottom: 24px; color: #1e293b; }
        .mt-40 { margin-top: 40px; }

        .key-card { padding: 32px; margin-bottom: 24px; border: 1.5px solid var(--border); transition: 0.3s; }
        .key-card.active { border-color: var(--primary); }
        .key-card.warning { border-color: var(--danger); border-left-width: 6px; }
        
        .card-top { display: flex; align-items: center; gap: 20px; margin-bottom: 24px; }
        .provider-logo { width: 48px; height: 48px; border-radius: 12px; overflow: hidden; background: #0f172a; display: flex; align-items: center; justify-content: center; }
        .provider-logo img { width: 32px; height: 32px; }
        .provider-info { flex: 1; }
        .provider-info h4 { font-size: 18px; font-weight: 700; margin-bottom: 4px; }
        .key-display { display: flex; align-items: center; gap: 10px; color: var(--text-muted); font-size: 13px; }
        .copy-icon { cursor: pointer; opacity: 0.6; }

        .status-badge-filled { padding: 4px 12px; border-radius: 9999px; font-size: 10px; font-weight: 800; color: white; }
        .status-badge-filled.green { background: #22c55e; }
        .status-badge-filled.orange { background: #f97316; }

        .budget-progress-section { margin-bottom: 24px; }
        .progress-header { display: flex; justify-content: space-between; margin-bottom: 12px; }
        .label-val .label, .usage-stat .label { display: block; font-size: 10px; font-weight: 700; color: var(--text-muted); letter-spacing: 0.5px; margin-bottom: 4px; }
        .label-val .val { font-size: 14px; }
        .usage-stat .val { font-size: 14px; font-weight: 800; text-align: right; }
        .usage-stat .val.blue { color: var(--primary); }

        .progress-bar { height: 8px; background: #f1f5f9; border-radius: 4px; overflow: hidden; }
        .progress-fill { height: 100%; background: var(--primary); border-radius: 4px; }
        .progress-fill.blue { background: #3b82f6; }

        .risk-alert { display: flex; gap: 16px; background: #fff5f5; border: 1px solid #fee2e2; padding: 16px; border-radius: 8px; margin-bottom: 24px; color: var(--danger); }
        .risk-text strong { font-size: 13px; display: block; margin-bottom: 4px; }
        .risk-text p { font-size: 12px; line-height: 1.5; opacity: 0.8; }

        .card-actions { display: flex; gap: 12px; }
        .test-btn, .rotate-btn { flex: 1; padding: 10px; background: white; border: 1.5px solid var(--border); border-radius: 8px; font-size: 13px; font-weight: 700; display: flex; align-items: center; justify-content: center; gap: 10px; color: var(--text-main); }
        .rotate-btn { background: #dc2626; color: white; border-color: #dc2626; }

        .logs-table-card { padding: 0; overflow: hidden; }
        .logs-table { width: 100%; border-collapse: collapse; }
        .logs-table th { text-align: left; padding: 16px 24px; font-size: 11px; font-weight: 700; color: var(--text-muted); background: #f8fafc; border-bottom: 1px solid var(--border); }
        .logs-table td { padding: 14px 24px; border-bottom: 1px solid var(--border); font-size: 13px; }

        .add-provider-card { padding: 24px; }
        .add-provider-card .card-header { display: flex; align-items: center; gap: 12px; margin-bottom: 24px; }
        .add-provider-card .card-header h3 { font-size: 18px; }
        .form-group { margin-bottom: 20px; }
        .form-group label { display: block; font-size: 10px; font-weight: 800; color: #64748b; margin-bottom: 8px; }
        .select-box, .input-box { border: 1px solid var(--border); padding: 12px 16px; border-radius: 8px; font-size: 13px; color: #94a3b8; display: flex; justify-content: space-between; align-items: center; }
        .input-box input { border: none; outline: none; background: transparent; font-size: 14px; width: 100%; }
        .encrypt-btn { width: 100%; background: #1e3a8a; color: white; padding: 14px; border-radius: 8px; font-size: 13px; font-weight: 700; display: flex; align-items: center; justify-content: center; gap: 10px; margin-top: 10px; }

        .security-note { padding: 24px; background: #1e3a8a; color: white; }
        .note-header { display: flex; align-items: center; gap: 12px; font-weight: 700; margin-bottom: 12px; }
        .security-note p { font-size: 12px; line-height: 1.6; opacity: 0.8; }

        .prediction-card { padding: 24px; border: 1px solid #fed7aa; }
        .pred-header { display: flex; align-items: center; gap: 12px; font-size: 11px; font-weight: 800; color: #ea580c; margin-bottom: 16px; }
        .prediction-card p { font-size: 13px; line-height: 1.5; color: #475569; margin-bottom: 16px; }
        .view-full { color: var(--primary); font-size: 13px; font-weight: 700; display: flex; align-items: center; gap: 8px; }
      `}} />
    </div>
  );
};

export default APIVault;
